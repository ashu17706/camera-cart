import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { LOAD_CART, INC_PROD_QUANTITY, DEC_PROD_QUANTITY } from "./../../types";
import { Link } from "react-router-dom";
import "./index.css";

import CartItem from "./cartItem";

class Cart extends Component {
  componentWillMount() {
    this.props.loadCart();
  }

  render() {
    const { items, totalCartPrice } = this.props;
    return <div className={classNames("main", "cart")}>
        { items.length != 0 ? items.map(item => (
              <CartItem key={item.id} {...item} {...this.props} />
            ))
            : <div className="cart-action"><h1>Your Cart is Empty</h1></div> }
        { items.length != 0 ? 
        <div className="cart-action">
          <h1>{totalCartPrice}</h1>
          <Link to="/checkout">
            <p>Checkout</p>
          </Link>
        </div>
        : ""
        }
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart,
    totalCartPrice: state.totalCartPrice
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