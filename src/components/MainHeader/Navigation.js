import React from 'react'
import { AuthContext } from '../../context/auth-context.js';
import classes from './Navigation.module.css'
// import {useHistory} from 'react-router-dom'
const Navigation = (props) =>{
    // console.log(props.isLoggedIn)
    // const history = useHistory();
    return (
        <AuthContext.Consumer >
            {(ctx) => {
                return (
                    <nav className={classes['nav-bar']}>
                    <ul>
                        {ctx.isLoggedIn && <li>Admin</li>}
                        {ctx.isLoggedIn && <li><button onClick={props.onLogout}>Logout</button></li>} 
                    </ul>
                </nav>
                )
            }}
        </AuthContext.Consumer>
    );
}
export default Navigation;