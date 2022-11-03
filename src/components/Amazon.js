import React from 'react';
import Cards from './Cards';
import { allProducts } from './Functions';
import { useState, useEffect } from 'react';
import '../styles/Amazon.css'


const Amazon = ({handleClick}) => {

  const [products, setProducts]=useState([])

  useEffect(()=>{
      allProducts(setProducts)
      },[] );




  return (
    <section className='products'>
        {
            products.map((item)=>(
                <Cards item={item} key={item.id} handleClick = {handleClick}/>
            ))
        }
    </section>
  )
}

export default Amazon