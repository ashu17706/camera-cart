import React, { Component } from "react";
import { connect } from 'react-redux';
import classNames from "classnames";
import { LOAD_PRODUCTS_START } from "../../types";

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { fetchProducts, products, loading, loaded } = this.props;
    return (
      <div className="main">
        <button onClick={fetchProducts}>Get Products</button>
        { loading ? 
          'loading...' : 
          <ul>
          {
            products
              .map(product => {
                return <li key={product.id}>{product.id}</li>
              })
          }
          </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(JSON.stringify(state.products, null, 2));
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