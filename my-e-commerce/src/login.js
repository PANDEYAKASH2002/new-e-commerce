import logo from './logo.svg';
import './App.css';

import { IoCall } from "react-icons/io5";
import { IoChatbox } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Contact() {
  const onsubmit =(event)=>{
    event.preventDefault();
    console.log("name",event.target[0].value);
    console.log("email",event.target[1].value);
    console.log("text",event.target[2].value);
  }
  return (
   
    <div className="contact">
       
   <b><h1>CONTACT US </h1></b>
   <h4>LET'S CONNECT WE ARE HERE TO HELP ,AND WE LOVE TO HEAR FROM YOU ! WHETHER YOU HAVE A QUESTION COMMENT OR JUST WANT TO CHAT YOU CAN  <br/>REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE OR BY PHONE,  <br/>EMAIL OR SOCIAL MEDIA</h4>
   <div>
  <div className="contact-button">
  <button className="button-contact" > <IoChatbox /> VIA SUPPORT CHAT</button>
   <button   className="button-contact2" > <IoCall /> VIA CALL</button>
   <button  className="button-contact1" > <MdEmail />VIA EMAIL FORM</button>
   
   <form action="" >
    <div className="form-control">
    <label htmlFor="name">
    NAME  </label>
    <input type="text" />
     </div>
     <div className="form-control1">
    <label htmlFor="name">
    EMAIL  </label>
    <input type="text" />
     </div>
     <div className="form-control2">
    <label htmlFor="name">
    TEXT  </label>
    <input type="text" />
     </div>
   
   </form>
  </div>
  <div className="contact-image">
    <img src="call.jpg" ></img>
  </div>
 
  </div>
  <button  className="button-submit" onSubmit={onsubmit} >SUBMIT</button>
    </div>
  );
}

export default Contact;
