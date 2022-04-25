import React from "react";

import "./ExpenseForm.css";

const ExpenseOpenForm = (props) => {
  const addNewExpenseClickHandler = () => {
    props.onAddNewExpenseClick();
  }

  return (
    <div>
      <button onClick={addNewExpenseClickHandler}>Add new expense</button>
    </div>
  );
};

export default ExpenseOpenForm;
