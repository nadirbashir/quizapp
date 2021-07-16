
import Card from '../UI/Card/Card';
import classes from './Quiz.module.css'


const Quiz = (props) => {
  
  return (
    <Card className={classes.quiz}>
      <form onSubmit={props.onQuestionSubmit}>
        <h4>{`Q${props.question+1}) ${props.arrayOfQuiz[props.question].question}`}</h4>
        <div className={classes['choice-box']}>
          <input
            type="radio"
            name="answer"
            id="choice0"
            value={props.arrayOfQuiz[props.question].choices[0]}
          />
          <label htmlFor="choice0">{props.arrayOfQuiz[props.question].choices[0]}</label>
          <br />
          <input
            type="radio"
            name="answer"
            id="choice1"
            value={props.arrayOfQuiz[props.question].choices[1]}
          />
          <label htmlFor="choice1">{props.arrayOfQuiz[props.question].choices[1]}</label>
          <br />
          <input
            type="radio"
            name="answer"
            id="choice2"
            value={props.arrayOfQuiz[props.question].choices[2]}
          />
          <label htmlFor="choice2">{props.arrayOfQuiz[props.question].choices[2]}</label>
          <br />
          <input
            type="radio"
            name="answer"
            id="choice3"
            value={props.arrayOfQuiz[props.question].choices[3]}
          />
          <label htmlFor="choice3">{props.arrayOfQuiz[props.question].choices[3]}</label>
          
        </div>
        <div className={classes.button}>
        <button type="submit">Next</button>
        </div>
      </form>
    </Card>
  );
};
export default Quiz;
