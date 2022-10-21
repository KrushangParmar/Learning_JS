import React, { useState } from "react";
import "./Expansesform.css";

const Expansesform = () => {
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredPrice, setEnteredPrice] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

    // const [userInput, setuserInput] = useState({
    //     enteredTitle: '',
    //     enteredPrice: '',
    //     enteredDate: ''
    // })
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setuserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    }

    const priceChangeHandler = (event) =>{
        setEnteredPrice(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredPrice: event.target.value,
        // })
        // setuserInput((prevState)=>{
        //     return {...prevState, enteredPrice: event.target.value}
        // })
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
        // setuserInput((prevState)=>{
        //     return {...prevState, enteredDate: event.target.value}
        // })
    }

    const submitHandler = (event) =>{
        event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        price: enteredPrice,
        date: new Date(enteredDate)
    };
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('')
    }
    return ( 
    <>
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} name="title" id="title" />
            </div>
            <div className="new-expense__control">
                <label htmlFor="price">Price</label>
                <input type="number" value={enteredPrice} onChange={priceChangeHandler} min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
            </div>
            <div className="new-expense__actions">
                <button type="Submit">Add Expenses</button>
            </div>
        </div>
    </form>
    </>
    );
}
export default Expansesform;