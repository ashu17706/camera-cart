import ReactDOM from "react-dom";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import rootReducer from "./reducers";

import rootSaga from "./sagas/rootSage";

import MotlinApi from "./motlin";

import "./index.css";
import App from "./components/App";

// create the saga middleWare
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// run the sagaMiddleWare
sagaMiddleware.run(rootSaga);

// authenticate with motlin
MotlinApi.authenticate();

ReactDOM
  .render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById("root")
  );