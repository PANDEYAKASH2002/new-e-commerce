import React from 'react';
import './Loginsignup.css';
function Loginsignup() {
  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>SIGNUP</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Enter your username" />
          <input type="email" placeholder="abc@gmail.com" />
          <input type="password" placeholder="Enter your password" />
        </div>
        <button>CONTINUE</button>
        <p className='loginsignup-login'> Already have an account? <span>Login here </span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p> By continuing ,i agree to terms of use and  privacy & policy. </p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup;
