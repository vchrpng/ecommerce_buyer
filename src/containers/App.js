import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components//Nav'
import Home from './Home'
import ShoppingBag from './ShoppingBag'
import About from './About'
import Contact from './Contact'
import Shop from './Shop'
import Product from './Product'





class App extends Component {
  render() {
      return (
        <Router>
        <div style={{padding:'40px'}}>
            <Nav/>
      
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/shoppingbag" component={ShoppingBag}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/products/:category/:id" component={Product}/>
            
            <Footer/>
        </div>
        </Router>
      );
  }
}







export default App;
