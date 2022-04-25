import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const { onSaveNewExpense } = props;
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleOnChangeEvent = (event) => {
    // console.log('title change');
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };

  const amountOnChangeEvent = (event) => {
    // console.log('amount change');
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
  };

  const dateOnChangeEvent = (event) => {
    // console.log('date change');
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  const submitFormEvent = (event) => {
    event.preventDefault();
    const newExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    onSaveNewExpense(newExpense);
  };

  return (
    <form onSubmit={submitFormEvent}>
      <div className="new-expense__controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleOnChangeEvent}
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountOnChangeEvent}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateOnChangeEvent}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
