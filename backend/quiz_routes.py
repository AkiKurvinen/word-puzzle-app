from fastapi import APIRouter, HTTPException, Body
from pymongo import MongoClient
from quiz_types import Question, QuizMeta
import os

router = APIRouter()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")

# CREATE
@router.post("/quiz/{quizname}/submit")
async def create_quiz(quizname: str,body: QuizMeta = Body(...)):
    meta = body.meta
    if not quizname:
        raise HTTPException(status_code=400, detail="Quiz name is required")
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    existing = db["quizzes"].find_one({"name": quizname})
    if existing:
        client.close()
        raise HTTPException(status_code=400, detail="Quiz name already exists")
    quiz_doc = {"name": quizname, "questions": []}
    if meta is not None:
        quiz_doc["meta"] = meta
    db["quizzes"].insert_one(quiz_doc)
    client.close()
    return {"message": "Quiz created successfully"}

# READ
@router.get("/quiz")
async def list_quizzes():
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    quizzes = db["quizzes"].find({}, {"name": 1, "_id": 0})
    quiz_names = [q["name"] for q in quizzes]
    client.close()
    return {"quizzes": quiz_names}

@router.get("/quiz/{quizname}")
async def get_quiz(quizname: str):
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    quiz = db["quizzes"].find_one({"name": quizname}, {"_id": 0})
    client.close()
    if not quiz:
        raise HTTPException(status_code=404, detail="Quiz not found")
    return quiz

# UPDATE
@router.put("/quiz/{quizname}")
async def update_quiz(quizname: str, question: Question):
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    result = db["quizzes"].update_one(
        {"name": quizname},
        {"$push": {"questions": question.dict()}}
    )
    client.close()
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Quiz not found")
    return {"message": "Quiz updated successfully"}

# DELETE
@router.delete("/quiz/{quizname}")
async def delete_quiz(quizname: str):
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    result = db["quizzes"].delete_one({"name": quizname})
    client.close()
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Quiz not found")
    return {"message": "Quiz deleted successfully"}
