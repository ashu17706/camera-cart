import React, { Component } from "react";
import { connect } from 'react-redux';
import classNames from "classnames";

import ProductCardSmall from '../common/productCardSmall';

import { LOAD_PRODUCTS_START } from "../../types";
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { fetchProducts } =this.props;
    fetchProducts();
  }
  
  render() {
    const { fetchProducts, products, loading, loaded } = this.props;
    return <div className={classNames("main", "home")}>
        {loading ? "loading..." :
             products.map(product => {
              return <ProductCardSmall key={product.id} product={product} />;
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
  fetchProducts: () => {
    dispatch({ type: LOAD_PRODUCTS_START });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);