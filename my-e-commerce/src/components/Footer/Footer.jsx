import React from 'react';
import './Footer.css';
import footer_logo from '../assets/logo_big.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo}></img>
        <p>SHOPPPERSTOP</p>
      </div>
      <ul className="footer-links">
        <li>COMPANY</li>
        <li>PRODUCTS</li>
        <li>OFFICES</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
     </ul>
     <div className="footer-social-icons">
        <div className="footer-icons-container">
            <FaInstagram style={{height:"40px",width:"30px"}}/>
            <FaWhatsapp style={{height:"40px",width:"30px"}}/>
            <FaFacebook style={{height:"40px",width:"30px"}}/>
            <FaTwitter style={{height:"40px",width:"30px"}}/>
            
        </div>
     </div>
     <div className="footer-copyright">
        <hr/>
        <p>© 2021 SHOPPPERSTOP. All Rights Reserved</p> 
     </div>
    </div>
  )
}

export default Footer;
