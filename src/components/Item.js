import React, { useState } from "react";

function Item({ name, category }) {
  const [ isInCart, setIsInCart] = useState(false)
  
  function addItemToCart() {
    setIsInCart(isInCart => !isInCart)
  }
  
  const itemCarted = isInCart ? "in-cart" : ""

  return (
    <li className={itemCarted}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItemToCart}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;