# word-puzzle-app
Word puzzle app

## Installation

### Frontend  

- Copy frontend/env-example to .env

```bash
cd frontend
npm install
npm start
```
See frontend running:
http://localhost:4200/


### Backend

**Create and Activate Virtual Environment**

A. *Windows (Git Bash)*
```bash
cd backend
python -m venv .venv
source .venv/Scripts/activate
```

B. *Windows (cmd or PowerShell)*
```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
```

```bash
pip install -r requirements.txt
fastapi dev main.py
```
See backend running:  
http://127.0.0.1:8000 

See auto swagger docs:  
http://127.0.0.1:8000/docs

### Database

```bash
cd database
docker-compose up -d
npm install
node seed.js
```
See mongo-express running:  
http://localhost:8081/ 

Login with credentials
USERNAME: admin  
PASSWORD: admin123  
