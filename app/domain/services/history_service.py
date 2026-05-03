from sqlalchemy.orm import Session
from app.infrastructure.database import models

class HistoryService:
    @staticmethod
    def save_health_log(db: Session, vin: str, score: float, telemetry: dict):
        """
        Salva o estado de saúde do veículo para análise de tendência (Requisito 4).
        """
        db_log = models.HealthLog(
            vin=vin,
            score=score,
            water_temp=telemetry.get("water_temp"),
            battery_voltage=telemetry.get("battery_voltage")
        )
        db.add(db_log)
        db.commit()
        db.refresh(db_log)
        return db_log