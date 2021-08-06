
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Route, Switch } from "react-router-dom";
import { MainHeader } from "../components/MainHeader/MainHeader";
import { Home } from "../containers/Home/Home";
import SignIn from "../containers/SignIn/SignIn";
import { logoutHandler } from "../util/auth";


export const Layout = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") !== null ? true : false);
 
    useEffect(()=>{
      localStorage.getItem("isLoggedIn") === 1 && setIsLoggedIn(true);
        if(isLoggedIn && history.location.pathname === ""){
                history.replace("home");
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
            <Home onLogout={() => logoutHandler(setIsLoggedIn, history)} />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
