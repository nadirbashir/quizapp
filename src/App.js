import MainHeader from "./components/MainHeader/MainHeader";
import SignIn from "./containers/SignIn/SignIn";
import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./containers/Home/Home";
import {logoutHandler } from "./util/auth";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    localStorage.getItem("isLoggedIn") === 1 && setIsLoggedIn(true);
  }, []);

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={()=>logoutHandler(setIsLoggedIn)} />
      <main>
        {!isLoggedIn && <SignIn setLogin={setIsLoggedIn} />}
        {isLoggedIn && <Home onLogout={() => logoutHandler(setIsLoggedIn)} />}
      </main>
    </>
  );
};
export default App;
