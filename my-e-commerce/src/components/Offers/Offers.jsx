import React from 'react';
import './Offers.css';
import exclusive_image from '../assets/exclusive_image.png';
function Offers() {
  return (
    <div id="offers">
       <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>offers for you</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
       </div>
       <div className="offers-right">
        <img src={exclusive_image}  alt="" />
       </div>
    </div>
  )
}

export default Offers;
