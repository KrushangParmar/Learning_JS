import React from "react";
import Header from "./component/header";
import User from "./component/user";
import Hook from "./component/hook";
import Test from "./Test";
import Expenseitem from "./component/expenses project/Expenseitem";

function App() {
    const expenses = [
        { id: 'e_id01', title: 'Car Insurance', price: 267.33, date: new Date(2022, 2, 27) },
        { id: 'e_id02', title: 'Bike Insurance', price: 237.39, date: new Date(2022, 10, 9) },
        { id: 'e_id03', title: 'Moter Insurance', price: 467.63, date: new Date(2022, 4, 17) },
        { id: 'e_id14', title: 'Cycle Insurance', price: 257.74, date: new Date(2022, 5, 25) },
    ]
    return ( <
        >
        <
        div className = "expenses" > <
        Expenseitem title = { expenses[0].title }
        price = { expenses[0].price }
        date = { expenses[0].date }
        /> <
        Expenseitem title = { expenses[1].title }
        price = { expenses[1].price }
        date = { expenses[1].date }
        /> <
        Expenseitem title = { expenses[2].title }
        price = { expenses[2].price }
        date = { expenses[2].date }
        /> <
        Expenseitem title = { expenses[3].title }
        price = { expenses[3].price }
        date = { expenses[3].date }
        /> 


        <
        /div>< / >
    )
}
export default App;