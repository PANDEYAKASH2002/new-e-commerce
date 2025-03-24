import React,{useContext} from 'react';
import "./Shopcategory.css";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/Item/Item";

import {ShopContext} from "../context/ShopContext";
function Shopcategory(props) {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner}></img>
      <div className="shopcategory-indexsort">
        <p><span>Showing 1-12</span>out of 36 products</p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon}></img>
        </div>
      </div>
      <div className="shopcategory-products">
      {all_product.map((item,i) => {
        if(props.category===item.category)
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
      })}
      </div>
      <div className="shopcategory-loadmore">
        EXPLORE MORE
      </div>
    </div>
  )
}

export default Shopcategory;
