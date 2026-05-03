class ScoreCalculator:
    @staticmethod
    def calculate(water_temp: float, battery_voltage: float) -> float:
        score = 10.0
        
        if water_temp > 105:
            score -= 5.0
        elif water_temp > 98:
            score -= 2.0
            
        if battery_voltage < 12.0:
            score -= 1.5
            
        return max(0.0, score)