import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <div className='item'>
      <Link to={`/product`}><img src = {props.image} className="product-image"
      alt="item" /></Link>
       <p className='item-name'>{props.name}</p>
       <div className="item-prices">
        <div className="item-price-new">
           $ {props.new_price}
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
       </div>
    </div>
  )
}
export default Item;
