from fastapi import FastAPI, Depends, BackgroundTasks, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from app.infrastructure.database.config import SessionLocal, engine
from app.infrastructure.database import models
from app.infrastructure.bluetooth.obd_repository import OBDRepository
from app.domain.services.score_calculator import ScoreCalculator
from app.domain.services.history_service import HistoryService
from app.domain.services.briefing_service import BriefingService
from app.domain.services.alert_manager import AlertManager
from app.domain.services.auth_service import AuthService, get_current_user

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="AutoCare Core Motor")
obd_repo = OBDRepository(simulation_mode=True)

class LoginSchema(BaseModel):
    email: str
    password: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/register")
async def register(user_data: dict, db: Session = Depends(get_db)):
    hashed_pwd = AuthService.get_password_hash(user_data["password"])
    new_user = models.User(
        email=user_data["email"],
        hashed_password=hashed_pwd,
        user_type=user_data["user_type"],
        vin_associated=user_data.get("vin"),
        workshop_name=user_data.get("workshop_name")
    )
    db.add(new_user)
    db.commit()
    return {"message": "Usuário criado com sucesso"}

@app.post("/login")
async def login(data: LoginSchema, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == data.email).first()
    
    if not user or not AuthService.verify_password(data.password, user.hashed_password):
        return {"error": "Credenciais inválidas"}
    
    token = AuthService.create_access_token(data={
        "sub": user.email,
        "user_type": user.user_type,
        "vin": user.vin_associated
    })
    
    return {
        "access_token": token,
        "token_type": "bearer",
        "user_type": user.user_type
    }

@app.get("/telemetry")
async def get_dashboard_data(
    background_tasks: BackgroundTasks, 
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    if current_user["user_type"] != "driver":
        raise HTTPException(status_code=403, detail="Acesso exclusivo para condutores")
    
    telemetry = obd_repo.fetch_telemetry()
    
    score = ScoreCalculator.calculate(
        water_temp=telemetry["water_temp"],
        battery_voltage=telemetry["battery_voltage"]
    )
    
    current_vin = current_user.get("vin") or "ABC123AUTO"
    status = "VERDE" if score > 8 else "AMARELO" if score >= 6 else "VERMELHO"

    HistoryService.save_health_log(db, vin=current_vin, score=score, telemetry=telemetry)

    background_tasks.add_task(AlertManager.process_alerts, current_vin, round(score, 1), status)
    
    return {
        "nota_seguranca": round(score, 1),
        "status_cor": status,
        "dados_sensores": telemetry,
        "vin": current_vin,
        "alerta_disparado": True if status == "VERMELHO" else False
    }

@app.get("/history/{vin}")
async def get_vehicle_history(vin: str, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    logs = db.query(models.HealthLog).filter(
        models.HealthLog.vin == vin
    ).order_by(models.HealthLog.timestamp.desc()).limit(10).all()
    
    return {
        "vin": vin,
        "count": len(logs),
        "history": [
            {
                "data": log.timestamp.strftime("%d/%m/%Y %H:%M"),
                "nota": log.score,
                "temp": log.water_temp
            } for log in logs
        ]
    }

@app.get("/briefing/{vin}")
async def get_briefing(vin: str, db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)):
    last_log = db.query(models.HealthLog).filter(
        models.HealthLog.vin == vin
    ).order_by(models.HealthLog.timestamp.desc()).first()

    if not last_log:
        return {"error": "Nenhum histórico encontrado para este veículo."}

    telemetry_data = {
        "water_temp": last_log.water_temp,
        "battery_voltage": last_log.battery_voltage
    }

    report = BriefingService.generate_report(telemetry_data)

    return {
        "vin": vin,
        "data_geracao": last_log.timestamp.strftime("%d/%m/%Y %H:%M"),
        "briefing": report
    }

@app.on_event("startup")
def startup_event():
    obd_repo.connect()