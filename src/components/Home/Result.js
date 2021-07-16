import React from 'react';
import Card from '../UI/Card/Card';

const Result = (props) =>{
    localStorage.removeItem("quizStart");
    const handleClick = () =>{
        props.setIsEnd("");
    }
    return (<Card>
        <h2>{`You've got ${props.score} Marks`}</h2>
        <button onClick={handleClick}>Back to home</button>
    </Card>);
}
export default Result;