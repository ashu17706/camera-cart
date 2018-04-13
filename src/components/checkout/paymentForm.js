import React from "react";
import { Link } from "react-router-dom";

export default ({ match }) => (
  <div className="body">
    <input type="text" placeholder="Name on Card" />
    <input type="text" placeholder="Card number" />
    <div>
      <input style={{ width: "40%" }} type="text" placeholder="Expiry Month" />
      <input style={{ width: "40%" }} type="text" placeholder="Expiry Year" />
    </div>
    <input type="text" placeholder="CVV" />
    <Link to="/confirmation">
      <button>Next</button>
    </Link>
  </div>
);
