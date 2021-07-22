import { useEffect, useState } from "react";
import  Card  from "../UI/Card/Card";
import { onChange, submitHandler } from "../../util/auth";

import classes from "./SignIn.module.css";
const SignIn = (props) => {
  const [user, setUser] = useState({
    enteredEmail: "",
    enteredPassword: "",
  });
  const [validation, setValidation] = useState({
    email: false,
    password: false,
    form: false,
  });

  useEffect(()=>{
    const identifier = setTimeout(()=>{
      setValidation({...validation, form: user.enteredEmail.includes('@') && user.enteredPassword.length > 6});
    },500);

    //Effect Clean Up: (runs before the useEffect function code runs except for the first time) used to avoid too many validation check on every key stroke

    return ()=>{
      clearTimeout(identifier);
    }
  },[user]);
    

  const handleInvalidEmail = () =>{
    setValidation({...validation, email:!user.enteredEmail.includes('@')});
  }

  const handleInvalidPassword = () =>{
    setValidation({...validation, password: user.enteredPassword.length < 6});
  }


  return (
    <Card className={classes.login}>
      <form onSubmit={(event) => submitHandler(event,validation, props.onLogin, user, setUser)} >
        <div className={`${classes.control} ${validation.email ? classes.invalid : ""}`}>
        <label htmlFor="email">Enter Email </label>
        <input
          id="email"
          name="enteredEmail"
          value={user.enteredEmail}
          type="email"
          placeholder="abc@example.com"
          onChange={(event) => onChange(event,setUser,user)}
          onBlur={handleInvalidEmail}
        />
        </div>
        <div className={`${classes.control} ${validation.password ? classes.invalid : ""}`}>
        <label htmlFor="password">Enter Password </label>
        <input
          id="password"
          name="enteredPassword"
          value={user.enteredPassword}
          type="password"
          placeholder="Password"
          onChange={(event) => onChange(event,setUser,user)}
          onBlur={handleInvalidPassword}
        />
        </div>
        <div className={classes.control}>
        <button type="submit" className={classes.button} disabled={!validation.form}>
          Login
        </button>
        {/* <button type="submit" className={classes.button}>
          Create New Account
        </button> */}
        </div>
      </form>
    </Card>
  );
};
export default SignIn;
