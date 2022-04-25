import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveNewExpense = (newExpenseData) => {
    // console.log('In new expense js')
    // console.log(newExpenseData);
    const expense = {
      ...newExpenseData,
      id: Date.now().toString(),
    };

    props.onNewExpense(expense);
    setIsEditing(false);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}> Add new expense </button>}
      {isEditing && (
        <ExpenseForm onSaveNewExpense={saveNewExpense} onCancel={stopEditing} />
      )}
    </div>
  );
};

export default NewExpense;
