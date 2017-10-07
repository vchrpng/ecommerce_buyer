import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components//Nav'
import Home from './Home'
import ShoppingBag from './ShoppingBag'
import Contact from './Contact'
import Shop from './Shop'
import Product from './Product'
import Wishlist from './Wishlist'




class App extends Component {
  render() {
      return (
        <Router>
        <div>
            <Nav/>
      
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/shoppingbag" component={ShoppingBag}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/wishlist" component={Wishlist}/>
            <Route path="/products/:category/:id" component={Product}/>
            
            <Footer/>
        </div>
        </Router>
      );
  }
}







export default App;
