import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Result.module.css'

const Result = (props) =>{
    localStorage.removeItem("quizStart");
    const handleClick = () =>{
        localStorage.removeItem("quizEnd")
        props.setIsEnd("");
    }
    return (<Card className={classes.result}>
        <h2>{`You've got ${props.score} Marks`}</h2>
        <button onClick={handleClick}>Back to home</button>
    </Card>);
}
export default Result;