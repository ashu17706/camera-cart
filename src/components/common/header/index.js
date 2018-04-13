import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './header.css';
import CartIcon from './cartIcon';
export default class Header extends Component {
  static defaultProps = { count: 0 };

  render() {
    const { count } = this.props;
    return <div className={classNames("header")}>
        <Link to="/">
          <h1>Camera Store</h1>
        </Link>
        <CartIcon count={count} />
      </div>;
  }
}
