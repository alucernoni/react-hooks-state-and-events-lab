import React from "react"; 
import {useState} from 'react';

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)
  const handleCart = () => setIsInCart(!isInCart)

  const cartClass = isInCart ? "in-cart" : ""

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{isInCart ? "Remove from cart" : "Add to cart"}</button>
    </li>
  );
}

export default Item;
