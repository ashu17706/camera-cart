import React from "react";
import { Link } from "react-router-dom";

export default ({ match }) => (
  <div className="body">
    <input type="text" placeholder="Address Line 1" />
    <input type="text" placeholder="Address Line 2" />
    <Link to="/checkout/payment">
      <button>Next</button>
    </Link>
  </div>
);