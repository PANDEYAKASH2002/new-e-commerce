import React, { useEffect } from "react";
import './navbar.css'

import {useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import cart_icon from '../navbar/cart.jpeg';

function Navbar(){
  
    return(
        <div className="navbar">
            <div className="nav-logo">
             <img src={logo} alt="logo"  />
             <p className="shopon">SHOPPERSTOP</p>
            </div>  
            
            <ul className="nav-menu">
            <Link to="/Shop"  style={{color:"black",textDecoration:"none"}}> <li>SHOP</li> </Link>
            <Link to="/mens" style={{color:"black",textDecoration:"none"}}>  <li >MENS </li></Link>
            <Link to="/womens" style={{color:"black",textDecoration:"none"}}> <li >WOMENS  </li></Link>
             <Link to="/kids" style={{color:"black",textDecoration:"none"}}> <li >KIDS </li></Link>
           
            </ul>
            <div className="nav-login-cart">
            
            <Link to="/login"><button>LOGIN</button> </Link>
             <Link to="/cart"> <img src={cart_icon} alt="cart" /></Link>
              <div className="nav-cart-count">0</div>
            </div>
            
       
        </div>
    );
}
export default Navbar;