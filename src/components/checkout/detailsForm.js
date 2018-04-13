import React from "react";
import { Link } from "react-router-dom";

export default ({ match }) => (
  <div className="body">
    <input type="text" placeholder="Your Name" />
    <input type="text" placeholder="Your Email" />
    <Link to="/checkout/address">
      <button>Next</button>
    </Link>
  </div>
);