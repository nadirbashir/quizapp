import React, { useState } from "react";
import classes from "./Home.module.css";
import Intro from "./Intro";
import Quiz from "./Quiz";
const Home = (props) => {
  const [isStart, setIsStart] = useState()

  const onStart = () =>{
    localStorage.setItem("quizStart","1");
    let quiz = localStorage.getItem("quizStart");
    setIsStart(quiz);
  }
  return (
    <div className={classes.home}>
      {!isStart && <Intro onStart={onStart} />}
    {isStart && <Quiz /> }
    </div>
  );
};
export default Home;