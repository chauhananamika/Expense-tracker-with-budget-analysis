import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdded={() => setRefresh((r) => r + 1)} />
      <ExpenseList refresh={refresh} />
    </div>
  );
}

export default App;
