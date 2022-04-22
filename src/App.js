import React from 'react';
import Expenses from "./components/Expenses";

function App() {
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
  ];

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses expenses={expenses} />
  //   </div>
  // );

  //Alternative for above code
  return React.createElement(
    'div', 
    {},
    React.createElement('h2', {}, "Let's get started"),
    React.createElement(Expenses, { expenses })
  );
}

export default App;
