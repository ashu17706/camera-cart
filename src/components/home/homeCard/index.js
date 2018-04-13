import React from "react";
import "./index.css";
import classNames from "classnames";

export default ({
  product: { name, id, meta: { display_price: { with_tax: { formatted } } } },
  addToCart
}) => (
  <div className={classNames("product-card-small")}>
    <img src="" />
    <p className="title">{name}</p>
    <div className="action">
      <p className="price">{formatted}</p>
      <p className="cart" title={id} onClick={() => addToCart(id)}>
        Add to Cart
      </p>
    </div>
  </div>
);