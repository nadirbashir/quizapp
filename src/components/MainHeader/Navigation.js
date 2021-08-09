import React, { useContext } from "react";  
import { AuthContext } from "../../context/auth-context.js";
import classes from "./Navigation.module.css";

const Navigation = () => {
  // console.log(props.isLoggedIn)
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes["nav-bar"]}>
      <ul>
        {ctx.isLoggedIn && <li>Admin</li>}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navigation;
