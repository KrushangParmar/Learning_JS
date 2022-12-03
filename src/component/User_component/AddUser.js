import React from "react";
import Card from "../UI/Card";
import classes from './adduser.module.css';
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = (props) => {
    const [enterUsename, setUsername] = useState('');
    const [enterAge, setEnterAge] = useState('');

    const addUserhandler = (event) => {
        event.preventDefault();
        if(enterUsename.trim().length === 0 || enterAge.trim().length === 0 || +enterAge < 1){
            return;
        }
        props.onAddUser(enterUsename, enterAge);
        setUsername('');
        setEnterAge('');
    }
    const usernameChangehandler = (event) => {
        setUsername(event.target.value);
    }
    const ageChangehandler = (event) => {
        setEnterAge(event.target.value);
    }
    
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserhandler}>
                <label htmlFor="username">Username</label>
                <input id="username"  type="text" value={enterUsename} onChange={usernameChangehandler}/>
                <label htmlFor="age">Age (Year)</label>
                <input id="age" type="text" value={enterAge} onChange={ageChangehandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;