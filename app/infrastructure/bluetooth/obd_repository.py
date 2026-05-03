import random

class OBDRepository:
    def __init__(self, simulation_mode: bool = False):
        """
        Define se o motor opera em modo real (OBD2) ou simulação (Dev Mode).
        """
        self.simulation_mode = simulation_mode
        self.connected = False

    def connect(self) -> bool:
        if self.simulation_mode:
            self.connected = True
            return True
        return False

    def fetch_telemetry(self) -> dict:
        """
        Coleta dados brutos (Requisito 3 do projeto).
        """
        if self.simulation_mode:
            return {
                "water_temp": round(random.uniform(85.0, 110.0), 1),
                "oil_pressure": round(random.uniform(30.0, 50.0), 1),
                "battery_voltage": round(random.uniform(11.5, 14.2), 1)
            }
        return {"water_temp": 0, "oil_pressure": 0, "battery_voltage": 0}