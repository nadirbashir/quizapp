import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "../containers/SignIn/SignIn";

export const AppRouter = () =>{
    return (
        <Router>
            <Route path="/" component={SignIn}></Route>
            <Route path="/" component={SignIn}></Route>
        </Router>
    )
}