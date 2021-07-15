import { Card } from "../UI/Card/Card";

const Quiz = (props) => {
    return ( <Card>
        <h2>Quiz Start</h2>
        <button onClick={props.questionSubmitHandler}>Next</button>
        </Card>);
}
export default Quiz;