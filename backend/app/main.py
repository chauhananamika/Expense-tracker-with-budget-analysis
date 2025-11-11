from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from . import models, schemas, crud, database
from typing import List


app = FastAPI()

# Allow React frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change "*" to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=database.engine)

@app.get("/")
def root():
    return {"message": "Expense Tracker API running!"}

@app.post("/expenses", response_model=schemas.Expense)
def create_expense(expense: schemas.ExpenseCreate):
    return crud.create_expense(database.SessionLocal(), expense)

@app.get("/expenses", response_model=List[schemas.Expense])
def get_expenses():
    return crud.get_expenses(database.SessionLocal())
