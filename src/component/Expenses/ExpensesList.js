import React from "react";
import "./ExpensesList.css";
import Expenseitem from "./Expenseitem";

const ExpensesList = (props) => {
    if (props.items.length === 0) { 
        return <h2 className="expenses-list__fallback d-flex fw-bold justify-content-center align-items-center">Found No Expenses.</h2>;
}
    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => (
                <Expenseitem
                    key={expense.id}
                    title={expense.title}
                    price={expense.price}
                    date={expense.date}
                />
            ))}
        </ul>

    )
}
export default ExpensesList;