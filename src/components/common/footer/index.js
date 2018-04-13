import React from "react";
import classNames from "classnames";

import "./footer.css";

export default () => (
  <div className={classNames("footer")}>
    <p>
      Made with{" "}
      <span role="img" aria-label="love">
        ♥️
      </span>{" "}
      in Hyderabad [IN]
    </p>
    <p>
      Built with&nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/reactjs/redux"
      >
        react
      </a>
      &nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/reactjs/react-redux"
      >
        redux
      </a>
      &nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/reactjs/react-redux"
      >
        react-redux
      </a>
      &nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/ReactTraining/react-router"
      >
        react-router
      </a>
      &nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/redux-saga/redux-saga"
      >
        redux-saga
      </a>
      &nbsp; and &nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/moltin/js-sdk"
      >
        moltin
      </a>
    </p>
  </div>
);