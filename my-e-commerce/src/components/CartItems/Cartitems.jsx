import React, { useContext } from 'react';
import "./Cartitems.css";
import remove_icon from "../assets/cart_cross_icon.png";
import {ShopContext} from "../../context/ShopContext";
import all_product from '../assets/all_product';
function Cartitems() {
    const {all_product,cartItems,removeFromCart}= useContext(ShopContext);
   
  return (
    <div className='cartitem'>
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
       
      </div>
      <hr/>
     {all_product.map((e)=>{
      if(cartItems[e.id]>0)
      {
        return    <div>
        <div className="cartitems-format">
            <img  src={e.image} alt="" className='carticon-product-icon' />
            <p>{e.name}</p>
            <p>{e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
            <p>{e.new_price*cartItems[e.id]}</p>
            <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}}></img>
        </div>
      </div>
      }
     })}
      
    </div>
  )
}

export default Cartitems;
