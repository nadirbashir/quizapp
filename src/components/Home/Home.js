import React, { useState } from "react";
import classes from "./Home.module.css";
import Intro from "./Intro";
import Quiz from "./Quiz";
import Result from "./Result"

const arrayOfQuiz = [
  {
    question: "Whose standard is ES-262?",
    choices: ["HTML", "Ruby", "Kotlin", "JavaScript"],
    correctChoice: "JavaScript",
  },
  {
    question: "What does &nbsp; does in an HTML page?",
    choices: [
      "Adds space(s)",
      "Adds link break",
      "Adds comma",
      "Does Nothing",
    ],
    correctChoice: "Adds space(s)",
  },
  {
    question: "What is not a value of the property 'position'?",
    choices: ["absolute", "fixed", "jiggly", "relative"],
    correctChoice: "jiggly",
  },
  {
    question: "What is best for creating responsive sites?",
    choices: ["Float", "Flexbox", "Margin", "Padding"],
    correctChoice: "Flexbox",
  },
  {
    question: "What is called 'sibling selector' in CSS?",
    choices: [".", "+", ">", "~"],
    correctChoice: "+",
  },
  {
    question:
      "If a local and global variable have the same name, which one will be used inside the function?",
    choices: ["Local", "Global", "Both", "None"],
    correctChoice: "Local",
  },
  {
    question: "What are arrays in JavaScript??",
    choices: ["Arrays", "Square Brackets", "Containers", "Objects"],
    correctChoice: "Objects",
  },
  {
    question: "What does ECMA stand for?",
    choices: [
      "Every Convenience Made Available",
      "European Computer Manufacturers Association",
      "England China Malaysia America?",
      "It means nothing",
    ],
    correctChoice: "European Computer Manufacturers Association",
  },
  {
    question: "What is localStorage() used for?",
    choices: [
      "To store data in system memory",
      "To store data in browser",
      "Same as sessionStorage()",
      "To store data in browser without an expiry time",
    ],
    correctChoice: "To store data in browser without an expiry time",
  },
  {
    question: "Can clearInterval() be used inside setInterval()?",
    choices: ["Yes", "No", "Sometimes", "Who cares?"],
    correctChoice: "Yes",
  },
];

const Home = (props) => {
  const [isStart, setIsStart] = useState();
  const [isEnd, setIsEnd] = useState();

  const [question, setQuestion] = useState(0);
  const [score,setScore] = useState(0)
  
  const questionSubmitHandler = (event) =>{
    event.preventDefault();
    let form = document.querySelector("form");
    let data = new FormData(form);
    let userAnswer = "";
    for (const entry of data) {
        userAnswer = entry[1];
  };
  if(userAnswer === arrayOfQuiz[question].correctChoice){
    setScore(score + 10);
  }
  if(question === arrayOfQuiz.length-1){
    localStorage.setItem("quizEnd","1");
    setIsEnd(localStorage.getItem("quizEnd"));
    setIsStart("");
    setQuestion(0);
    }else{
        setQuestion(question+1);
    }
}

  const onStart = () =>{
    localStorage.setItem("quizStart","1");
    let quizStart = localStorage.getItem("quizStart");
    setIsStart(quizStart);
  }
  return (
    <div className={classes.home}>
      {!isStart && !isEnd && <Intro onStart={onStart} />}
    {isStart && <Quiz question={question} onQuestionSubmit={questionSubmitHandler} arrayOfQuiz={arrayOfQuiz}/> }
    {isEnd && <Result score={score} setIsEnd={setIsEnd} />}
    </div>
  );
};
export default Home;