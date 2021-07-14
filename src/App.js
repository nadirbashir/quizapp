import MainHeader from './components/MainHeader/MainHeader';
import SignIn from './components/SignIn/SignIn';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
      <SignIn />
      </main>
    </React.Fragment>
  );
}
export default App;
