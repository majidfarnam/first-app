import React, {useContext} from 'react';
import {BrowserRouter,Route,Link,Switch, Redirect} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/header/header'
import Calendar from './pages/calendar';
import HomePage from './pages/homePage';
import AuthContextProvider from '../src/context/auth/AuthContext';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path='/calendar' component={Calendar} />
          <div style={{paddingTop:'100px', direction:'rtl'}}>
          </div>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App;
