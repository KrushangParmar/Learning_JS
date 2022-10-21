import React from "react";
import Expansesform from "./Expansesform";
import "./Newexpanses.css";

const Newexpanses = (props) => {
    const saveExpenseDataHandler  = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseData(expenseData);
    }

    return ( 
    <>
        <div className="new-expense">
            <Expansesform onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    </>
    );
}
export default Newexpanses;