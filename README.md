# 💰 Expense Tracker with Budget Analysis

An **Expense Tracker** web app that helps users log their daily expenses, categorize them, and analyze their spending trends through interactive charts.

Built with a **React frontend** and a **Python (FastAPI) backend**, this project is ideal for learning CRUD operations, data visualization, and full-stack app integration.

---

## 🚀 Tech Stack

**Frontend:** React (Vite)  
**Backend:** Python (FastAPI)  
**Database:** SQLite (default, can switch to PostgreSQL/MySQL)  
**Visualization:** Chart.js  
**API Testing:** Postman  

---

## 🧰 Setup Instructions

### 🔹 1. Run the Backend (FastAPI)
🧱 Step 1: Go to backend folder

```
cd backend
```


🧱 Step 2: Create and activate virtual environment (optional but recommended)

```
python3 -m venv venv

source venv/bin/activate  # Mac/Linux

source venv\Scripts\activate     # Windows
```

🧱 Step 3: Install dependencies
```
pip install -r requirements.txt
```

🧱 Step 4: Run the backend server
```
uvicorn app.main:app --reload
```

Your backend will start at 👉 http://127.0.0.1:8000

You can test it here:
Swagger Docs: http://127.0.0.1:8000/docs

### 🔹 2. Run the Frontend (React + Vite)
🪄 Step 1: Go to frontend folder
```
cd /frontend
```
🪄 Step 2: Install dependencies
```
npm install
```
🪄 Step 3: Start the frontend app
```
npm run dev
```
Your frontend will run at 👉 http://localhost:5173

### 🧩 3. Running the Complete Project

Start the backend first:
```
cd backend
uvicorn app.main:app --reload
```

Then start the frontend:
```
cd /frontend
npm run dev
```

Open your browser and go to
👉 http://localhost:5173

The app will now connect to your local backend (FastAPI).
