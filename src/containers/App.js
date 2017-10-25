import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components//Nav'
import ShoppingBag from './ShoppingBag'
import Shop from './Shop'
import Product from './Product'




class App extends Component {
  render() {
      return (
        <Router>
        <div>
            <Nav/>
            <Route exact path="/" component={Shop}/>
            <Route path="/shoppingbag" component={ShoppingBag}/>
            <Route path="/products/:category/:id" component={Product}/>
            
            <Footer/>
        </div>
        </Router>
      );
  }
}







export default App;
