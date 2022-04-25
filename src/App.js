import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 17),
    },
    {
      id: "e2",
      title: "House Insurance",
      amount: 350.67,
      date: new Date(2021, 3, 27),
    },
    {
      id: "e3",
      title: "New Chair",
      amount: 59.37,
      date: new Date(2021, 5, 19),
    },
    {
      id: "e4",
      title: "New TV",
      amount: 94.13,
      date: new Date(2022, 1, 17),
    },
    {
      id: "e5",
      title: "New AC",
      amount: 194.13,
      date: new Date(2022, 3, 17),
    }
  ];

  const newExpenseEvent = (newExpense) => {
    console.log('App js')
    console.log(newExpense);
  }

  return (
    <div>
      <NewExpense onNewExpense={newExpenseEvent}/>
      <Expenses expenses={expenses} />
    </div>
  );

  //Alternative for above code
  // return React.createElement(
  //   'div', 
  //   {},
  //   React.createElement('h2', {}, "Let's get started"),
  //   React.createElement(Expenses, { expenses })
  // );
}

export default App;
