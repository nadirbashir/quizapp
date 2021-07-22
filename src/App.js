import MainHeader from "./components/MainHeader/MainHeader";
import SignIn from "./components/SignIn/SignIn";
import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import { loginHandler, logoutHandler } from "./util/auth";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === 1) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={()=>logoutHandler(setIsLoggedIn)} />
      <main>
        {!isLoggedIn && <SignIn onLogin={() => loginHandler(setIsLoggedIn)} />}
        {isLoggedIn && <Home onLogout={() => logoutHandler(setIsLoggedIn)} />}
      </main>
    </>
  );
};
export default App;
