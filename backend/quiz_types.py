from pydantic import BaseModel
from typing import List, Optional

class Option(BaseModel):
    label: str
    correct: bool

class Question(BaseModel):
    question: str
    options: List[Option]

class QuizMeta(BaseModel):
    meta: Optional[str] = None