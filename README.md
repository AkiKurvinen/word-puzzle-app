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

- Copy frontend/env-example to .env

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


## Frontend testing
A. Test with headless browser:  
```bash
npx playwright test
npx playwright show-report
```

B. Test with playwright UI to see snapshots:  
```bash
npx playwright test --ui
```

Note: Install more playwright browsers:  
```bash
npx playwright install webkit
npx playwright install firefox
npx playwright install chromium
```

