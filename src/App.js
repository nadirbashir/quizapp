import MainHeader from "./components/MainHeader/MainHeader";
import SignIn from "./components/SignIn/SignIn";
import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem("isLoggedIn") === "1"){
      setIsLoggedIn(true);
    }
  },[]);

  const loginHandler = (email,password) => {
    localStorage.setItem("isLoggedIn","1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }
  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <SignIn onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}
export default App;
