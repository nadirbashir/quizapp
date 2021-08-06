import MainHeader from "./components/MainHeader/MainHeader";
import SignIn from "./containers/SignIn/SignIn";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Home } from "./containers/Home/Home";
import { logoutHandler } from "./util/auth";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Layout } from "./Layout";

const App = () => {
 

  const history = useHistory();
  return (
    <Layout />
  );
};
export default App;
