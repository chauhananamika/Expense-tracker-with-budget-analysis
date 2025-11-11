import { useEffect, useState } from "react";
import { getExpenses } from "../api/api";

export default function ExpenseList({ refresh }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getExpenses().then(setExpenses);
  }, [refresh]);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((e) => (
          <li key={e.id}>
            {e.date} - {e.category}: ₹{e.amount} ({e.description})
          </li>
        ))}
      </ul>
    </div>
  );
}
