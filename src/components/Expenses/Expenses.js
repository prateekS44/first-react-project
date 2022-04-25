import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const { expenses } = props;
  const [selectedExpenseYear, setSelectedExpenseYear] = useState("2019");

  const filterChangeHandler = (filterYear) => {
    setSelectedExpenseYear(filterYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedExpenseYear;
  });

  let expenseItemsContent = <p>No Expenses found</p>;

  if (filteredExpenses.length > 0) {
    expenseItemsContent = filteredExpenses.map((expense, index) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filterValue={selectedExpenseYear}
          onFilterChange={filterChangeHandler}
        />
        {expenseItemsContent}
      </Card>
    </div>
  );
};

export default Expenses;
