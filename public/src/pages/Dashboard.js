import React from 'react';
import NavbarUser from '../components/Navbar';
import Amazon from '../components/Amazon';
import Cart from '../components/Cart';
import { useState, useEffect } from "react";
// import { allCarts } from '../components/Functions';
 import { cartId } from '../components/Functions'

function Dashboard( ) {

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);


  useEffect(()=>{
    cartId(2,setCart)
  },[])
/*

  useEffect(()=>{

        allCarts(setCart)

        cart.find((carrito) =>{
          if(carrito.userId == user.id){

            setUsercart(carrito.products)

          }
        })
    },[] );*/

  




  //para ver la cantidad de productos en el icono del carrito
  const handleClick = (item)=>{
    
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
        setWarning(true);
        setTimeout(()=>{
          setWarning(false);
        }, 2000);
        return ;
    }
			
		setCart([...cart, item]);
	}

  return (
    <>
      <NavbarUser size = {cart.length}/>
      <Amazon handleClick = {handleClick}/>
      <Cart  cart = {cart} setCart = {setCart} amount = {1}/>
      {
        warning && <div className='warning'> Item is already add to your cart</div>
      }
    </>
    
  )
}

export default Dashboard
