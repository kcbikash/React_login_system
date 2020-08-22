import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Router } from 'react-router';

import Login from './components/login/Login'
import Registeruser from './components/login/SignUp'
import Home from './components/home/Home'
import SignUpSuccess from './components/login/SignUpSuccess'

function App() {
  return (
    <div className="App">
     <Switch>
      
        <Route  path='/' component={Login} exact />
        <Route  path='/home' component={Home} exact />
        <Route path="/signup" component={Registeruser} />
        <Route path="/logout" component={Login} />
        <Route path="/signupsuccess" component={SignUpSuccess} />

       
     </Switch>
    </div>
  );
}

export default App;
