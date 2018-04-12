import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import fetchP from "./sagas/fetchProducts";

import './index.css';
import App from './components/App';

// create the saga middleWare
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// run the sagaMiddleWare
sagaMiddleware.run(fetchP);


ReactDOM
  .render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  );