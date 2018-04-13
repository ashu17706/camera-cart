import React from 'react';
import { Link } from 'react-router-dom';

export default ({ count }) => (
  <Link to="/cart">
    <div className="cart-icon">
      <span>Cart</span>
      &nbsp;
      <span>( {count} )</span>
    </div>
  </Link>
);