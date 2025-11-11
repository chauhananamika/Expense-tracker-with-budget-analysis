from pydantic import BaseModel
from typing import Optional

class ExpenseBase(BaseModel):
    date: str
    category: str
    amount: float
    description: Optional[str] = None

class ExpenseCreate(ExpenseBase):
    pass

class Expense(ExpenseBase):
    id: int
    class Config:
        orm_mode = True
