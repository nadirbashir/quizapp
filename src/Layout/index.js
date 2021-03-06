
import { MainHeader } from "../components/MainHeader/MainHeader";
import { Home } from "../containers/Home/Home";
import SignIn from "../containers/SignIn/SignIn";
import { logoutHandler } from "../util/auth";

import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "../context/auth-context";



export const Layout = () => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") !== null ? true : false);
    useEffect(()=>{
      localStorage.getItem("isLoggedIn") && setIsLoggedIn(true);
      if(isLoggedIn && history.location.pathname === "/"){
                history.replace("/home");
        }
  }, [isLoggedIn,history]);

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: () => logoutHandler(setIsLoggedIn,history)
    }}>
        <MainHeader />
        <main>
        <Switch>
          <Route path="/" exact>
            <SignIn setLogin={setIsLoggedIn} />
          </Route>
          <Route path="/home">
           {isLoggedIn ? <Home /> : <Redirect to="/" />} 
          </Route>
        </Switch>
      </main>
    </AuthContext.Provider>
  );
};
