import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseOpenForm from "./ExpenseOpenForm";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const { onNewExpense } = props;
  const saveNewExpense = (newExpenseData) => {
    // console.log('In new expense js')
    // console.log(newExpenseData);
    const expense = {
      ...newExpenseData,
      id: Date.now().toString(),
    };

    onNewExpense(expense);
    setExpenseFormContentState(expenseOpenFormContent);
  };

  const cancelNewExpense = () => {
    setExpenseFormContentState(expenseOpenFormContent);
  };

  const addNewExpenseOpenHandler = () => {
    setExpenseFormContentState(expenseNewFormContent);
  }

  const expenseOpenFormContent = <ExpenseOpenForm onAddNewExpenseClick={addNewExpenseOpenHandler}/>;
  const expenseNewFormContent = (
    <ExpenseForm
      onSaveNewExpense={saveNewExpense}
      onCancelNewExpense={cancelNewExpense}
    />
  );

  const [expenseFormContentState, setExpenseFormContentState] =
  useState(expenseOpenFormContent);

  return <div className="new-expense">{expenseFormContentState}</div>;
};

export default NewExpense;
