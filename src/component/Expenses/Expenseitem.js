import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const Expenseitem = (props) => {
    // const [title, setTitle] = useState(props.title);
    // const clickHandle = () =>{
    //     setTitle("Updated!")
    //   };
    return ( 
    <Card className = "expense-item" >
        <ExpenseDate date = { props.date }/> 
        <div className = "expense-item__description" >
        <h2> { props.title } </h2>   
        <div className = "expense-item__price" > ${props.price} </div>   
        </div> 
        {/* <button onClick={clickHandle}>Change Title</button> */}
        </Card>  
    );
}
export default Expenseitem;