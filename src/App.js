import MainHeader from "./components/MainHeader/MainHeader";
import SignIn from "./containers/SignIn/SignIn";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Home } from "./containers/Home/Home";
import { logoutHandler } from "./util/auth";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.getItem("isLoggedIn") === 1 && setIsLoggedIn(true);
  }, []);

  const history = useHistory();
  return (
    <>
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
    </>
  );
};
export default App;
