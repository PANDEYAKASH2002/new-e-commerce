import React from 'react';
import "./Breadcrum.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

function Breadcrum(props) {
    const {product} = props; 
  
  return (
    <div className='breadcrum'>
      Home <img src={arrow_icon} alt=""></img>Shop <img src={arrow_icon} alt=""/> {product} <img src={arrow_icon} alt=""/> {product} 
    </div>
  )
}

export default Breadcrum;
