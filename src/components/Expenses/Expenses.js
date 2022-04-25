import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const { expenses } = props;
  const [selectedExpenseYear, setSelectedExpenseYear] = useState('2019');


  const filterChangeHandler = (filterYear) => {
    setSelectedExpenseYear(filterYear);
    console.log('current', selectedExpenseYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter filterValue={selectedExpenseYear} onFilterChange={filterChangeHandler}/>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
