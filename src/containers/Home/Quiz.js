import Card from "../../components/UI/Card/Card";
import classes from "./Quiz.module.css";

const Quiz = (props) => {
  let min = 0,
    sec = 60;
  //   setInterval(() => {
  //     sec--;
  //     console.log(sec, min);
  //     if (min === 0 && sec === 0) {
  //       localStorage.setItem("quizEnd", "1");
  //       props.setIsEnd(localStorage.getItem("quizEnd"));
  //       localStorage.removeItem("quizStart");
  //       props.setIsStart("");
  //       clearInterval();
  //     } else if (sec === 0) {
  //       min--;
  //       sec = 60;
  //     }
  //   }, 1000)
  return (
    <Card className={classes.quiz}>
      <form onSubmit={props.onQuestionSubmit}>
        <p className={classes.timer}>{`${min}:${sec}`}</p>
        <h4>{`Q${props.question + 1}) ${props.arrayOfQuiz[props.question].question}`}</h4>
        <div className={classes["choice-box"]}>
          <input
            type="radio"
            name="answer"
            id="choice0"
            value={props.arrayOfQuiz[props.question].choices[0]}
          />
          <label htmlFor="choice0">
            {props.arrayOfQuiz[props.question].choices[0]}
          </label>
          <br />
          <input
            type="radio"
            name="answer"
            id="choice1"
            value={props.arrayOfQuiz[props.question].choices[1]}
          />
          <label htmlFor="choice1">
            {props.arrayOfQuiz[props.question].choices[1]}
          </label>
          <br />
          <input
            type="radio"
            name="answer"
            id="choice2"
            value={props.arrayOfQuiz[props.question].choices[2]}
          />
          <label htmlFor="choice2">
            {props.arrayOfQuiz[props.question].choices[2]}
          </label>
          <br />
          <input
            type="radio"
            name="answer"
            id="choice3"
            value={props.arrayOfQuiz[props.question].choices[3]}
          />
          <label htmlFor="choice3">
            {props.arrayOfQuiz[props.question].choices[3]}
          </label>
        </div>
        <div className={classes.button}>
          <button type="submit">Next</button>
        </div>
      </form>
    </Card>
  );
};
export default Quiz;
