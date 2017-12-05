import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ShoppingBag from './ShoppingBag'
import Shop from './Shop'
import Product from './Product'
import Login from './Login'
import Register from './Register'
import Checkout from './Checkout'
import Account from './Account'


class App extends Component {
  render() {
    
      return (
            <Router>
              <div>
                    <Route exact path="/" component={Shop}/>
                    <Route path="/shoppingbag" component={ShoppingBag}/>
                    <Route path="/products/:category/:id" component={Product}/>
                    <Route path="/account/login" component={Login}/>
                    <Route path="/account/register" component={Register}/>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/account" component={Account} />
              </div>
            </Router>
      )
  }
}

export default App
