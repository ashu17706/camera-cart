import React from "react";
import "./index.css";

export default ({
  name,
  quantity,
  product_id,
  id,
  increseQuantity,
  decreaseQuantity
}) => (
  <div className="cart-item">
    <img src="" />
    <p className="title">{name}</p>
    <div className="quantity">
      <p>Quantity:</p>
      <p>{quantity}</p>
    </div>

    <div className="actions">
      <span onClick={() => decreaseQuantity(id, quantity - 1)}> - </span>
      <span onClick={() => increseQuantity(id, quantity + 1)}> + </span>
    </div>
  </div>
);