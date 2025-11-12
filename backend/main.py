from fastapi import FastAPI
from fastapi import HTTPException
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/quiz")
async def list_quizzes():
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    quizzes = db["quizzes"].find({}, {"name": 1, "_id": 0})
    quiz_names = [q["name"] for q in quizzes]
    client.close()
    return {"quizzes": quiz_names}

@app.get("/quiz/{quizname}")
async def get_quiz(quizname: str):
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    quiz = db["quizzes"].find_one({"name": quizname}, {"_id": 0})
    client.close()
    if not quiz:
        raise HTTPException(status_code=404, detail="Quiz not found")
    return quiz
