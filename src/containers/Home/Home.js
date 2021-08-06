import React, { useState } from "react";
import classes from "./Home.module.css";
import Intro from "./Intro";
import Quiz from "./Quiz";
import Result from "./Result";
import { arrayOfQuiz } from "../../constants/quiz";

export const Home = (props) => {
  const [isStart, setIsStart] = useState();
  const [isEnd, setIsEnd] = useState();

  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questionSubmitHandler = (event) => {
    event.preventDefault();
    let form = document.querySelector("form");
    let data = new FormData(form);
    let userAnswer = "";
    for (const entry of data) {
      userAnswer = entry[1];
    }
    if (userAnswer === arrayOfQuiz[question].correctChoice) {
      setScore(score + 10);
    }
    if (question === arrayOfQuiz.length - 1) {
      localStorage.setItem("quizEnd", "1");
      localStorage.removeItem("quizStart");
      setIsStart("");
      setIsEnd(localStorage.getItem("quizEnd"));
      setQuestion(0);
    } else {
      setQuestion(question + 1);
    }
  };

  const onStart = () => {
    localStorage.setItem("quizStart", "1");
    setIsStart(localStorage.getItem("quizStart"));
  };
  return (
    <div className={classes.home}>
      {!isStart && !isEnd && <Intro onStart={onStart} />}
      {isStart && (
        <Quiz
          question={question}
          onQuestionSubmit={questionSubmitHandler}
          arrayOfQuiz={arrayOfQuiz}
        />
      )}
      {isEnd && (
        <Result score={score} setIsEnd={setIsEnd} setIsStart={setIsStart} />
      )}
    </div>
  );
};
// export default Home;
