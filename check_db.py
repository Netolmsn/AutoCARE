import sqlite3

def check_workshops():
    conn = sqlite3.connect('autocare.db')
    cursor = conn.cursor()
    
    print("--- Oficinas com pedidos registrados ---")
    cursor.execute("SELECT DISTINCT workshop_name FROM service_requests")
    rows = cursor.fetchall()
    
    if not rows:
        print("Nenhum pedido encontrado. Verifique se o /share-briefing funcionou.")
    else:
        for row in rows:
            print(f"-> '{row[0]}'")
            
    conn.close()

if __name__ == "__main__":
    check_workshops()