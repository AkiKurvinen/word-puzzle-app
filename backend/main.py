from quiz_routes import router as quiz_router
from fastapi import FastAPI
from fastapi import HTTPException
from pymongo import MongoClient
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware


load_dotenv()

app = FastAPI()

# Allow all origins (for development)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")

@app.get("/")
async def root():
    return {"message": "Hello World"}

app.include_router(quiz_router)