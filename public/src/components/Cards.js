import React from 'react';
import '../styles/Cards.css' 


const Cards = ({item, handleClick}) => {
    const {title, description, price, thumbnail} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={thumbnail} alt = {title}/> 
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{description}</p>
            <p>Price - ${price}</p>
            <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards