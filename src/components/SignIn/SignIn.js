import { useEffect, useState } from "react";
import { Card } from "../UI/Card/Card";
import classes from "./SignIn.module.css";
const SignIn = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailInvalid, setEmailInvalid ]=useState();
  const [passwordInvalid, setPasswordInValid ]=useState();
  const [formIsvalid, setFormIsvalid] = useState(false);  
  
  useEffect(()=>{
    const identifier = setTimeout(()=>{
      setFormIsvalid(enteredEmail.includes('@') && enteredPassword.length > 6);
    },500);

    //Effect Clean Up: (runs before the useEffect function code runs except for the first time) used to avoid too many validation check on every key stroke
    return ()=>{
      clearTimeout(identifier);
    }
  },[enteredEmail, enteredPassword]);
  
  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setEnteredPassword(event.target.value);
  };

  const handleInvalidEmail = () =>{
    setEmailInvalid(!enteredEmail.includes('@'));
  }

  const handleInvalidPassword = () =>{
    setPasswordInValid(enteredPassword.length < 6);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsvalid){
      props.onLogin(enteredEmail, enteredPassword);
      setEnteredEmail("");
      setEnteredPassword("");
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler} >
        <div className={`${classes.control} ${emailInvalid ? classes.invalid : ""}`}>
        <label htmlFor="email">Enter Email </label>
        <input
          id="email"
          value={enteredEmail}
          type="email"
          placeholder="abc@example.com"
          onChange={handleEmailChange}
          onBlur={handleInvalidEmail}
        />
        </div>
        <div className={`${classes.control} ${passwordInvalid ? classes.invalid : ""}`}>
        <label htmlFor="password">Enter Password </label>
        <input
          id="password"
          value={enteredPassword}
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          onBlur={handleInvalidPassword}
        />
        </div>
        <div className={classes.control}>
        <button type="submit" className={classes.button} disabled={!formIsvalid}>
          Login
        </button>
        </div>
      </form>
    </Card>
  );
};
export default SignIn;
