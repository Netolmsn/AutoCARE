from typing import Optional, List
from fastapi import FastAPI, Depends, BackgroundTasks, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from pydantic import BaseModel

from app.infrastructure.database.config import SessionLocal, engine
from app.infrastructure.database import models
from app.infrastructure.bluetooth.obd_repository import OBDRepository
from app.domain.services.score_calculator import ScoreCalculator
from app.domain.services.history_service import HistoryService
from app.domain.services.briefing_service import BriefingService
from app.domain.services.alert_manager import AlertManager
from app.domain.services.auth_service import AuthService, get_current_user

# Inicializa o banco de dados
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="AutoCare Core Motor")
obd_repo = OBDRepository(simulation_mode=True)

class ShareBriefingSchema(BaseModel):
    workshop_name: str
    description: Optional[str] = "Solicitação via AutoCare"

class StatusUpdateSchema(BaseModel):
    status: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/register")
async def register(user_data: dict, db: Session = Depends(get_db)):
    try:
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
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=400, 
            detail="Este e-mail já está cadastrado. Tente um e-mail diferente."
        )

@app.post("/login")
async def login(
    data: OAuth2PasswordRequestForm = Depends(), 
    db: Session = Depends(get_db)
):
    user = db.query(models.User).filter(models.User.email == data.username).first()
    
    if not user or not AuthService.verify_password(data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="E-mail ou senha incorretos")
    
    token = AuthService.create_access_token(data={
        "sub": user.email,
        "user_type": user.user_type,
        "vin": user.vin_associated,
        "workshop_name": user.workshop_name
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
    score = ScoreCalculator.calculate(telemetry["water_temp"], telemetry["battery_voltage"])
    
    current_vin = current_user.get("vin") or "ABC123AUTO"
    status_veiculo = "VERDE" if score > 8 else "AMARELO" if score >= 6 else "VERMELHO"

    HistoryService.save_health_log(db, vin=current_vin, score=score, telemetry=telemetry)
    background_tasks.add_task(AlertManager.process_alerts, current_vin, round(score, 1), status_veiculo)
    
    return {
        "nota_seguranca": round(score, 1), 
        "status_cor": status_veiculo,
        "dados_sensores": telemetry, 
        "vin": current_vin
    }

@app.post("/share-briefing")
async def share_with_mechanic(
    data: ShareBriefingSchema, 
    db: Session = Depends(get_db), 
    current_user: dict = Depends(get_current_user)
):
    if current_user["user_type"] != "driver":
        raise HTTPException(status_code=403, detail="Apenas condutores podem compartilhar briefings.")

    new_request = models.ServiceRequest(
        vin=current_user["vin"],
        driver_email=current_user["email"],
        workshop_name=data.workshop_name,
        description=data.description
    )
    db.add(new_request)
    db.commit()
    return {"message": f"Briefing enviado com sucesso para {data.workshop_name}"}

@app.get("/mechanic/dashboard")
async def get_mechanic_dashboard(
    db: Session = Depends(get_db), 
    current_user: dict = Depends(get_current_user)
):
    if current_user["user_type"] != "mechanic":
        raise HTTPException(status_code=403, detail="Acesso exclusivo para mecânicos parceiros.")

    my_workshop = current_user.get("workshop_name")
    requests = db.query(models.ServiceRequest).filter(
        models.ServiceRequest.workshop_name == my_workshop
    ).all()

    return {
        "oficina": my_workshop, 
        "leads_pendentes": len(requests),
        "solicitacoes": requests
    }

@app.patch("/mechanic/service-request/{request_id}/status")
async def update_request_status(
    request_id: int,
    data: StatusUpdateSchema,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    if current_user["user_type"] != "mechanic":
        raise HTTPException(status_code=403, detail="Acesso exclusivo para mecânicos.")

    request_entry = db.query(models.ServiceRequest).filter(models.ServiceRequest.id == request_id).first()

    if not request_entry:
        raise HTTPException(status_code=404, detail="Solicitação não encontrada.")

    # Verifica se a solicitação pertence à oficina do mecânico logado
    if request_entry.workshop_name != current_user.get("workshop_name"):
        raise HTTPException(status_code=403, detail="Você não tem permissão para alterar este pedido.")

    request_entry.status = data.status
    db.commit()
    return {"message": f"Status atualizado para: {data.status}"}

@app.on_event("startup")
def startup_event():
    obd_repo.connect()