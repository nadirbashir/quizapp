import React from 'react';
import classes from './MainHeader.module.css'
import Navigation from './Navigation';
export const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>Quiz App</h1>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};


