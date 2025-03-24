import React from 'react'
import Hero from '../hero/Hero';
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import Newcollection from '../components/Newcollections/Newcollection';
import Newsletter from '../components/NewsLetter/Newsletter';


function shop() {
  return (
    <div>
      <Hero/>
     <Popular/>
     <Offers/>
     <Newcollection/>
     <Newsletter/>
     
    </div>
  )
}

export default shop;
