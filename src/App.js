import React from "react";
import Newexpenses from './component/NewExpenses/Newexpanses';
import Expenses from "./component/Expenses/Expenses";

function App() {
    const expenses = [
        { id: 'e_id01', title: 'Car Insurance', price: 267.33, date: new Date(2022, 2, 27) },
        { id: 'e_id02', title: 'Bike Insurance', price: 237.39, date: new Date(2022, 10, 9) },
        { id: 'e_id03', title: 'Moter Insurance', price: 467.63, date: new Date(2022, 4, 17) },
        { id: 'e_id14', title: 'Cycle Insurance', price: 257.74, date: new Date(2022, 5, 25) },
    ]
    return (
        React.createElement('div', {},
        React.createElement('h2', {}, 'Let\'s Start'),
        React.createElement(Newexpenses, {}),
            React.createElement(Expenses, { items: expenses })
        )
    )
}
export default App;