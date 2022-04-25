import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const { onNewExpense } = props
  const saveNewExpense = (newExpenseData) => {
    // console.log('In new expense js')
    // console.log(newExpenseData);
    const expense = {
        ...newExpenseData,
        id: Date.now().toString()
    }

    onNewExpense(expense);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={saveNewExpense} />
    </div>
  );
};

export default NewExpense;
