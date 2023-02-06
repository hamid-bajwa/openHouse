import React from 'react'

import { Switch,Route,Redirect } from "react-router-dom";
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './Header';
import Home from './HomeComponent';
import Footer from './Footer';
import Login from './Login';
import SignUp from './signup';

function Main() {
    return (
      <div className='body'>
        <Header></Header>
        <Switch>
          <Route exact path="/home" component={Home} ></Route>   
          <Route exact path="/aboutus" component={About} ></Route>
          <Route exact path="/contactus" component={Contact} ></Route>
          <Route exact path="/login" component={Login} ></Route>
          <Route exact path="/signup" component={SignUp} ></Route>
          <Redirect to='/home'></Redirect>
          
        </Switch>
        <Footer></Footer>
      </div>
      );
}

export default Main;