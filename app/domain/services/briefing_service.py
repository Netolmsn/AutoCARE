class BriefingService:
    @staticmethod
    def generate_report(telemetry: dict) -> dict:
        """
        Gera o briefing técnico para o mecânico (T07).
        Traduz dados brutos em instruções compreensíveis.
        """
        temp = telemetry.get("water_temp", 0)
        voltage = telemetry.get("battery_voltage", 0)
        
        diagnostico = []
        instrucoes_obrigatorias = [
            "Verificar Velas (Spark Plugs)", 
            "Verificar Nível/Pressão de Óleo"
        ]

        if temp > 105:
            diagnostico.append(f"ALERTA CRÍTICO: Superaquecimento detectado ({temp}°C).")
            instrucoes_obrigatorias.append("Inspecionar Vazamentos no Sistema de Arrefecimento.")
        
        if voltage < 12.0:
            diagnostico.append(f"ALERTA: Tensão da bateria baixa ({voltage}V).")
            instrucoes_obrigatorias.append("Testar Alternador e Integridade da Bateria.")

        return {
            "resumo_tecnico": diagnostico,
            "checklist_para_mecanico": instrucoes_obrigatorias,
            "status_sistema": "Crítico" if temp > 105 else "Atenção" if temp > 95 else "Normal"
        }