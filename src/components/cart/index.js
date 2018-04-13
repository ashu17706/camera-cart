import React, { Component } from 'react';
import { connect } from "react-redux";
import classNames from 'classnames';
import { LOAD_CART, INC_PROD_QUANTITY, DEC_PROD_QUANTITY } from "./../../types";

import './index.css';

import CartItem from './cartItem';

class Cart extends Component {
  componentWillMount() {
    this.props.loadCart();
  }

  render() {
    const { items } = this.props;
    return <div className={classNames("main", "cart")}>
        {
          items
          .map(item => <CartItem key={item.id} {...item} {...this.props} />)
        }
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart
  }
}

const mapDispatchToProps = dispatch => ({
  loadCart: () => {
    dispatch({ type: LOAD_CART });
  },
  increseQuantity: (itemId, qty) => {
    console.log(itemId);
    dispatch({ type: INC_PROD_QUANTITY, payload: { itemId, qty } });
  },
  decreaseQuantity: (itemId, qty) => {
    console.log(itemId);
    dispatch({ type: DEC_PROD_QUANTITY, payload: { itemId, qty } });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);