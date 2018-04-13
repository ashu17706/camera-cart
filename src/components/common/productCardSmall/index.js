import React from 'react';
import './index.css';
import classNames from 'classnames';

export default ({ product }) => (
  <div className={classNames("product-card-small")}>
    { product.name }
  </div>
);