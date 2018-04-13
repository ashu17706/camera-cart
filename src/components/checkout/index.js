import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames";

import DetailsForm from "./detailsForm";
import AddressForm from "./addressForm";
import PaymentForm from "./paymentForm";

import './index.css';
class Checkout extends Component {
  render() {
    const {match} = this.props;
    return <div className={classNames("main", "checkout")}>
        <div className="heading">
          <h1>Checkout</h1>
        </div>
        <div className="main-section">
          <div className="form">
            <div className="head">
              <h2>Your Details</h2>
            </div>
            <Route exact path={`${match.url}/details`} component={DetailsForm} />
            <Route path={`${match.url}/address`} component={AddressForm} />
            <Route path={`${match.url}/payment`} component={PaymentForm} />
          </div>
          <div className="summary">
            <div className="head">
              <h2>Summary</h2>
            </div>
            <div className="body">
              <h1>heading</h1>
            </div>
          </div>
        </div>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    
  }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps)(Checkout);