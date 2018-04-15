import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./common/header";
import Footer from "./common/footer";
import NotFound from "./common/notFound";
import Home from "./home";
import Product from "./product";
import Cart from "./cart";
import Checkout from "./checkout";
import Confirmation from "./confirm";


class App extends Component {
  render() {
    return [<Header />, <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/confirmation" component={Confirmation} />
        <Route path="*" component={NotFound} />
      </Switch>, <Footer />];
  }
}

export default App;
