import React from 'react'
import './Productdisplay.css';
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
function Productdisplay(props) {
    const {product} = props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='product-display'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={props.image}></img>
            <img src={props.image}></img>
            <img src={props.image}></img>
            <img src={props.image}></img>
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={props.image}></img>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon}></img>
            <img src={star_icon}></img>
            <img src={star_icon}></img>
            <img src={star_icon}></img>
           
            <img src={star_dull_icon}></img>
            <p>122</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${props.old_price}</div>
          <div className="productdisplay-right-price-new">${props.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, nam. Totam molestiae, sequi inventore labore similique provident quaerat ut error dignissimos nulla dolores delectus maiores doloribus impedit, corporis enim hic?
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button className='button-product' onClick={()=>{addToCart(product.id)}}> Add to cart</button>
        <p></p>
      </div>
          </div>
  )
}

export default Productdisplay;
