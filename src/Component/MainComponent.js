import React from 'react'

import {  
BrowserRouter,
  Routes,Route,Navigate } from "react-router-dom";
import Contact from './ContactComponent';
import Profile from './ProfileComponent';
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
          <Routes>
            <Route exact path="/home" element={<Home/>} ></Route>   
            <Route exact path="/profile" element={<Profile/>} ></Route>
            <Route exact path="/aboutus" element={<About/>} ></Route>
            <Route exact path="/contactus" element={<Contact/>} ></Route>
            <Route exact path="/login" element={<Login/>} ></Route>
            <Route exact path="/signup" element={<SignUp/>} ></Route>   
          </Routes>
        <Footer></Footer>
      </div>
      );
}

export default Main;