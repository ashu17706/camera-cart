import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import ProductCardSmall from "./homeCard";

import { LOAD_PRODUCTS_START, ADD_TO_CART_START, LOAD_CART } from "../../types";

import "./home.css";

class Home extends Component {
  componentWillMount() {
    // populate the products
    this.props.getProducts();
    this.props.loadCart();
  }
  
  render() {
    const { products, loading, loaded } = this.props;

    return <div className={classNames("main", "home")}>
        {loading ? "loading..." :
             products.map(product => {
              return <ProductCardSmall key={product.id} product={product} {...this.props } />;
            })
          }
      </div>;
  }
}

const mapStateToProps = state => {
  return { 
    products: state.products,
    loading: state.loading
  };
}

const mapDispatchToProps = dispatch => ({
  getProducts: () => {
    dispatch({ type: LOAD_PRODUCTS_START });
  },
  loadCart: () => {
    console.log("load Cart");
    dispatch({ type: LOAD_CART });
  },
  addToCart: (id) => {
    dispatch({ type: ADD_TO_CART_START, payload: id });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);