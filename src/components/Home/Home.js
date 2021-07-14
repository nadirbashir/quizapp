import React from "react";
import { Card } from "../UI/Card/Card.js";
import classes from "./Home.module.css";
const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h2>Home Page</h2>
    </Card>
  );
};
export default Home;