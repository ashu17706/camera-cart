import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './common/header';
import Footer from './common/footer';
import NotFound from './common/notFound';
import Home from "./home";
import Product from "./product";
import Cart from "./cart";
import Checkout from "./checkout";

class App extends Component {
  render() {
    return <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>;
  }
}

export default App;
