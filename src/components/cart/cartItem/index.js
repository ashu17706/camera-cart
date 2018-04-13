import React from 'react';
import './index.css';

export default ({
  item = {
    "img-src":
      "https://rukminim1.flixcart.com/image/100/100/dslr-camera/f/h/3/digital-camera-d3400-kit-with-lens-af-p-dx-nikkor-18-55-mm-f-3-5-original-imaemk39zmqfvvr6.jpeg?q=90",
    title: "Some product name",
    quantity: 1
  }
}) => (
  <div className="cart-item">
    <img src={item["img-src"]} />
    <p className="title">{item.title}</p>
    <div className="quantity">
      <p>Quantity:</p>
      <p>{item.quantity}</p>
    </div>

    <div className="actions">
      <span> - </span>
      <span> + </span>
    </div>
  </div>
);