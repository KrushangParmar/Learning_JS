import React, { useState } from "react";
import Newexpenses from './component/NewExpenses/Newexpanses';
import Expenses from "./component/Expenses/Expenses";
import CourseGoalItem from "./CourseGoals/CourseGoalItem/CourseGoalItem";
import CourseGoalApp from "./CourseGoalApp";

const Dummy_expenses = [
    { id: 'e_id01', title: 'Car Insurance', price: 267.33, date: new Date(2021, 2, 27) },
    { id: 'e_id02', title: 'Bike Insurance', price: 237.39, date: new Date(2019, 10, 9) },
    { id: 'e_id03', title: 'Moter Insurance', price: 467.63, date: new Date(2020, 4, 17) },
    { id: 'e_id14', title: 'Cycle Insurance', price: 257.74, date: new Date(2020, 5, 25) },
];

function App() {
    const[expenses, setExpenses]=useState(Dummy_expenses);
    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
          return [expense, ...prevExpenses];
        });
      };
    return (
        // React.createElement('div', {},
        // React.createElement('h2', {}, 'Let\'s Start'),
        // React.createElement(Newexpenses, {onAddExpense: addExpenseHandler}),
        //     React.createElement(Expenses, { items: expenses })
        // )
        //     <div>
        //   <Newexpenses onAddExpense={addExpenseHandler} />
        //   <Expenses items={expenses} />
        // </div>
        // CourseGoalApp
            <div>
              <CourseGoalApp/>
            </div>
    )
}
export default App;