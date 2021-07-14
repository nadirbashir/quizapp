import { useState } from "react";
import { Card } from "../UI/Card/Card";
import classes from "./SignIn.module.css";
const SignIn = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setEnteredPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredEmail.trim().length === 0) {
      alert("please enter a valid email");
    } else if (enteredPassword.length < 4) {
      alert("password must contain atleast 4 character");
    } else {
      setEnteredEmail("");
      setEnteredPassword("");
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler} >
        <div className={classes.control}>
        <label>Enter Email </label>
        <input
          value={enteredEmail}
          type="email"
          placeholder="abc@example.com"
          onChange={handleEmailChange}
        />
        </div>
        <div className={classes.control}>
        <label>Enter Password </label>
        <input
          value={enteredPassword}
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        </div>
        <div className={classes.control}>
        <button type="submit" className={classes.button}>
          Login
        </button>
        </div>
      </form>
    </Card>
  );
};
export default SignIn;
