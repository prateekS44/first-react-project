import React, { useState } from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const { title, amount, date } = props;

  const [currentTitle, setCurrentTitle] = useState(title);

  const clickHandler = () => {
    setCurrentTitle('Updated title');
    console.log(currentTitle)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{currentTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Update the title</button>
    </Card>
  );
}

export default ExpenseItem;
