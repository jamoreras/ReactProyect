import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Cart.css'


function Cart({cart, setCart, amount}) {

  const [price, setPrice] = useState(0)
  

  const handleRemove = (id) =>{
    const arr = cart.filter((item)=>item.id !== id);
    setCart(arr);

}

  const handlePrice = ()=>{
    let ans = 0;
    cart.map((item)=>(
        ans += amount * item.price
    ))
    setPrice(ans);
}


useEffect( () => {
  handlePrice();

})

  return (
    <div id="cart" className='cart'>
      {
        cart.map((item) =>(
          <div className='cart_box' key={item.id}>
            <div className='cart_img'>
              <img src={item.thumbnail}/>
              <p>{item.title}</p>
            </div>
            <div>
              <button>-</button>
              <button>{amount}</button>
              <button>+</button>
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
