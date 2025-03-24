import React from 'react';
import './Newsletter.css';
function Newsletter() {
  return (
    <div className='newsletter'>  
      <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
      <p>subscribe to our newsletter and get exclusive offers on your email</p>
      <div>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter;
