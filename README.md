# AutoCare - Core Engine 🚗💨

Motor de telemetria e análise de saúde veicular desenvolvido em **Python** com **FastAPI**. O sistema processa dados via OBD2, calcula scores de segurança e gerencia alertas críticos.

## 🛠️ Tecnologias
- FastAPI (Backend)
- SQLAlchemy (ORM)
- JWT (Autenticação e RBAC)
- Pydantic (Validação)
- Bcrypt (Criptografia)

## 🏗️ Arquitetura
O projeto segue princípios de **Clean Architecture**, dividindo responsabilidades entre:
- **Domain**: Regras de negócio e serviços core.
- **Infrastructure**: Persistência e conexões externas (OBD2/Bluetooth).
- **API**: Endpoints e segurança.

## 🚀 Como Rodar
1. Instale as dependências: `pip install -r requirements.txt`
2. Inicie o servidor: `python -m uvicorn app.main:app --reload`
