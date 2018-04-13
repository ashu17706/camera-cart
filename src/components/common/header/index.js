import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";

import "./index.css";
import CartIcon from "./cartIcon";
class Header extends Component {
  render() {
    const { count } = this.props;
    return <div className={classNames("header")}>
        <Link to="/">
          <h1>Camera Store</h1>
        </Link>
        <CartIcon count={ count } />
      </div>;
  }
}

const mapStateToProps = ({ cart }) => ({
  count: cart.length
});

export default connect(mapStateToProps, null)(Header);