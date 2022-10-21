import React, { useState } from "react";
import Card from "../UI/Card";
import Expenseitem from "./Expenseitem";
import './Expenses.css';
import Expensesfilter from "./Expensesfilter";

const Expenses = (props) => {
    const[filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler= selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <>
        <Card className = "expenses" >
            <Expensesfilter selectedYear={filteredYear} onChangefilter={filterChangeHandler}/>
        <Expenseitem title = { props.items[0].title }
        price = { props.items[0].price }
        date = { props.items[0].date }
        />  
        <Expenseitem title = { props.items[1].title }
        price = { props.items[1].price }
        date = { props.items[1].date }
        />  
        <Expenseitem title = { props.items[2].title }
        price = { props.items[2].price }
        date = { props.items[2].date }
        />  
        <Expenseitem title = { props.items[3].title }
        price = { props.items[3].price }
        date = { props.items[3].date }
        /> 
        </Card> </>
    );
}
export default Expenses;