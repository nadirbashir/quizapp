import React from "react";
import classes from "./Home.module.css";
const Home = (props) => {
  return (
    <div className={classes.home}>
      <h2>Quiz Application</h2>
      <p></p>
      <button className={classes.button}>Start</button>
    </div>
  );
};
export default Home;