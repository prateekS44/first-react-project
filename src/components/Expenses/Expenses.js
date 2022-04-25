import React, { useState } from "react";

import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filterValue={selectedExpenseYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
