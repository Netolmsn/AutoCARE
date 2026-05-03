from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
from .config import Base

class VehicleModel(Base):
    """

    Representa o veículo identificado (Requisito 3).

    """
    __tablename__ = "vehicles"

    id = Column(Integer, primary_key=True, index=True)
    vin = Column(String, unique=True, index=True)
    make = Column(String)
    model = Column(String)
    year = Column(Integer)

class HealthLog(Base):
    """

    Histórico para análise de tendência semestral (Requisito 4).

    """
    __tablename__ = "health_logs"

    id = Column(Integer, primary_key=True, index=True)
    vin = Column(String, index=True)
    score = Column(Float)
    water_temp = Column(Float)
    battery_voltage = Column(Float)
    timestamp = Column(DateTime, default=datetime.utcnow)

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    user_type = Column(String)
    vin_associated = Column(String, nullable=True)
    workshop_name = Column(String, nullable=True)