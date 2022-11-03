import React from 'react';
import NavbarUser from '../components/Navbar';
import Amazon from '../components/Amazon';
import Cart from '../components/Cart';
import { useState, useEffect } from "react";
 import { allUsers, cartId } from '../components/Functions'
import { json } from 'react-router-dom';

function Dashboard( ) {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [usuario, setUsuario]=useState([]) ;

  useEffect(()=>{
    cartId(JSON.parse(localStorage.getItem('userLoggedIn'))[0].cartId,setCart);   
    
  },[])


  //para ver la cantidad de productos en el icono del carrito
  const handleClick = (item)=>{

    const newProduct = {
      discountPercentage: item.discountPercentage,
      id: item.id,
      price: item.price,
      quantity: 1,
      title: item.title,
      thumbnail: item.thumbnail
     
    }
		let isPresent = false;
		cart.forEach((product)=>{
			if (newProduct.id === product.id)
			isPresent = true;
		})
		if (isPresent){
        setWarning(true);
        setTimeout(()=>{
          setWarning(false);
        }, 2000);
        return ;
    }
			
		setCart([...cart, newProduct]);
	}

  

  return (
    <>
      <NavbarUser size = {cart.length} user={usuario.firstName} setShow = {setShow}/>
      {
        show ? <Amazon handleClick = {handleClick}/> : <Cart  cart = {cart} setCart = {setCart} />
      }      
      
      {
        warning && <div className='warning'> Item is already added to your cart</div>
      }
    </>
    
  )
}

export default Dashboard
