import React, { Component } from 'react';
import classNames from 'classnames';

import './index.css';

import CartItem from './cartItem';

export default class Cart extends Component {
  render() {
    return (
    <div className={classNames('main', 'cart')}>
      {
        [1,2,3]
        .map(item => <CartItem key={item} />)
      }
    </div>
    );
  }
}