const BASE_URL = "http://127.0.0.1:8000";

export async function getExpenses() {
  const res = await fetch(`${BASE_URL}/expenses`);
  return await res.json();
}

export async function createExpense(expense) {
  const res = await fetch(`${BASE_URL}/expenses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });
  return await res.json();
}
