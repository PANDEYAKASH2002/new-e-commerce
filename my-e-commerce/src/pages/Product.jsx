import React,{useContext} from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import './Product.css';
import Productdisplay from '../components/Productdisplay/Productdisplay';
import { ShopContext } from '../context/ShopContext';

function Product(props) {
   const {all_product}=useContext(ShopContext);
   const {productId} = useParams();
   const product = all_product.find((e)=>e.id === Number(productId))
  return ( 
    <div className='product'>
      <Breadcrum product={Product}/>
      <Productdisplay product={Product}/>

    </div>
  )
}

export default Product;
