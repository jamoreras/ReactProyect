import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Cart.css'
import { allProducts } from './Functions';


function Cart({cart, setCart}) {

  const [price, setPrice] = useState(0)

  const handleRemove = (id) =>{
    const arr = cart.filter((item)=>item.id !== id);
    setCart(arr);
}

  const handlePrice = ()=>{
    let ans = 0;
    cart.map((item)=>(
        ans += item.quantity * item.price
    ))
    setPrice(ans);
}


//guarda la lista temporalmente, aumenta la del producto y devuelve la lista con setCart  
const handleChange = (item, d) =>{
    const ind = cart.indexOf(item);
    const arr = cart
    arr[ind].quantity += d
    
    if (arr[ind].quantity===0)
    arr[ind].quantity=1;
    setCart([...arr])
}


useEffect( () => {
  handlePrice();

})

  return (
    
    <div id="carrito" className='cart'>
      {
        cart.map((item) =>(
          <div className='cart_box' key={item.id}>
            <div className='cart_img'>
              <img src={item.thumbnail}/>
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={()=>handleChange(item, -1)}>-</button>
              <button>{item.quantity}</button>
              <button onClick={()=>handleChange(item, +1)}>+</button>
            </div>
            <div>
              <span>${item.price}</span>
              <button onClick={()=>handleRemove(item.id)} >Remove</button>
            </div>

          </div>
        ))
      }
      <div className='total'>
        <span>Total price of your cart</span>
        <span>$ = {price}</span>
      </div>
      
    </div>
    
  )
}

export default Cart
