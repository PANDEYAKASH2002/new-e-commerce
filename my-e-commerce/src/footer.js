import logo from './logo.svg';
import './App.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
function Footer() {
  return (
    <div className="foot">
    <ul className='list-1'>
      <b><li>MAIN</li></b>
      <li>ABOUT</li>
      <li>WORK</li>
      <li>BUILDS</li>
      <li>STORES</li>
    </ul>
    <ul className='list-2'>
      <b><li>INFO</li></b>
      <li>Privacy Policy</li>
      <li>Terms And Conditions</li>
      <li>Disclaimer</li>
      <li>FAQs</li>
    </ul>
    <ul className='list-3'>
      <b><li>CONTACT US</li></b>
      <li>Business inquires email to </li>
      <li>info@flathat3d.com</li>
   
    </ul>
    <ul className='list-4'>
      <b><li>FOLLOW US</li></b>
    <a href="x.com">  <FaXTwitter /></a>
     <a href="https://www.instagram.com/accounts/login/?hl=en"><FaInstagram /></a>
    <a href="https://www.facebook.com/login/"><FaFacebookF /></a>
     <a href="https://www.whatsapp.com/"><IoLogoWhatsapp /></a>
   
    </ul>
    
    </div>
  );
}

export default Footer;
