import { useState } from "react";
import { createExpense } from "../api/api";

export default function ExpenseForm({ onAdded }) {
  const [form, setForm] = useState({ date: "", category: "", amount: "", description: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createExpense(form);
    setForm({ date: "", category: "", amount: "", description: "" });
    onAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" value={form.date} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
      <input type="number" name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
}
