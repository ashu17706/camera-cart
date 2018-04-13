import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames";

import "./index.css";

export default class Confirmation extends Component {
  render() {
    return <div className={classNames("main", "confirm")}>
        <div className="heading">
          <h1>
            Thank you for Shopping with us! Your order has been confirmed.
          </h1>
        </div>
      </div>;   
  }
}