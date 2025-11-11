from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
from .database import Base

class Expense(Base):
    __tablename__ = "expenses"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(String, index=True)
    category = Column(String)
    amount = Column(Float)
    description = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
