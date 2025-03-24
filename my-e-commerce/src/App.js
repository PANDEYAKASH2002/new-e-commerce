import React from 'react';
import Navbar from './components/navbar/navbar';
import './App.css';

import Hero from './hero/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './pages/shop';
import Product from './pages/Product';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Loginsignup from './pages/Loginsignup';
import Shopcategory from './pages/Shopcategory';
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kid_banner from "./components/assets/banner_kids.png";

function App() {
  return (
    <div>

  <BrowserRouter>
   <Navbar />
   
  <Routes>
    <Route path="/login" element={<Loginsignup />} ></Route>
    
    <Route path="/mens" element={<Shopcategory  banner={men_banner} category="men"/>} ></Route>
    <Route path="/womens" element={<Shopcategory banner={women_banner} category="women"  />}></Route>
    <Route path="/kids" element={<Shopcategory banner={kid_banner} category="kid"  />}></Route>
    <Route path=':productId' element={<Product  category="product"  />}></Route>
    <Route path="/product" element={<Product  category="product" />}></Route>
    
    <Route path="/hero" element={<Hero/>} ></Route>
    <Route path="/Shop" element={<Shop/>} ></Route>

    <Route path="/cart" element={<Cart/>} ></Route>
    
    
  </Routes>
   <Footer/>
  </BrowserRouter>

    </div>
  );
}

export default App;
