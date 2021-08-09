
import { MainHeader } from "../components/MainHeader/MainHeader";
import { Home } from "../containers/Home/Home";
import SignIn from "../containers/SignIn/SignIn";
import { logoutHandler } from "../util/auth";

import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";


export const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") !== null ? true : false);
    useEffect(()=>{
      localStorage.getItem("isLoggedIn") && setIsLoggedIn(true);
      if(isLoggedIn && history.location.pathname === "/"){
          console.log(history)
                history.replace("/home");
        }
  }, [isLoggedIn]);

  const history = useHistory();
  return (
    <div>
        <MainHeader
        isLoggedIn={isLoggedIn}
        onLogout={() => logoutHandler(setIsLoggedIn, history)}
      />
        <main>
        <Switch>
          <Route path="/" exact>
            <SignIn setLogin={setIsLoggedIn} />
          </Route>
          <Route path="/home">
           {isLoggedIn ? <Home onLogout={() => logoutHandler(setIsLoggedIn, history)} /> : <Redirect to="/" />} 
          </Route>
        </Switch>
      </main>
    </div>
  );
};
