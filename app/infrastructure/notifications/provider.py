import logging

class NotificationProvider:
    """
    Simula o envio de alertas para serviços externos.
    """
    @staticmethod
    def send_whatsapp(vin: str, message: str):
        print(f"[WHATSAPP ALERT] Enviando para {vin}: {message}")
        return True

    @staticmethod
    def send_push(message: str):
        print(f"[PUSH NOTIFICATION]: {message}")
        return True