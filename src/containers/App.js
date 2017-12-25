import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ShoppingBag from './ShoppingBag'
import Shop from './Shop'
import Product from './Product'
import Login from './Login'
import Signup from './Signup'
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
                    <Route path="/account/signup" component={Signup}/>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/account/myaccount" component={Account} />
              </div>
            </Router>
      )
  }
}

export default App
