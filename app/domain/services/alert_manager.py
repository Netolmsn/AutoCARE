from app.infrastructure.notifications.provider import NotificationProvider

class AlertManager:
    @staticmethod
    def process_alerts(vin: str, score: float, status: str):
        """
        Analisa a gravidade e dispara notificações imediatas.
        Conforme Requisito 5: Alertas Vermelhos fora do ambiente do app.
        """
        if status == "VERMELHO":
            msg = f"ALERTA CRÍTICO AutoCare! Veículo {vin} com Nota de Segurança {score}. Risco de falha iminente. Verifique o app."

            NotificationProvider.send_whatsapp(vin, msg)
            NotificationProvider.send_push(msg)
            
            return True
        return False