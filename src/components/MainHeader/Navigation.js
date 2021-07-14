import React from 'react'
import classes from './Navigation.module.css'
const Navigation = (props) =>{
    console.log(props.isLoggedIn)
    return (
        <nav className={classes['nav-bar']}>
            <ul>
                {props.isLoggedIn && <li>Admin</li>}
                {props.isLoggedIn && <li><button onClick={props.onLogout}>Logout</button></li>}
            </ul>
        </nav>
    );
}
export default Navigation;