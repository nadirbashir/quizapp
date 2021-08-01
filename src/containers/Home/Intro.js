import classes from './Intro.module.css'
const Intro = (props) =>{
    return (<div className={classes.intro}>
        <h2>Quiz Application</h2>
        <button className={classes.button} onClick={props.onStart}>Start</button>
      </div>);
}
export default Intro;