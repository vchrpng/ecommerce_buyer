import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Nav from '../components//Nav/Nav'
import Home from './Home'
import ShoppingBag from './ShoppingBag'
import About from './About'
import Contact from './Contact'
import Shop from './Shop'
import Product from './Product'
import Container from '../components/Etc/Container'




class App extends Component {
  render() {
      return (
        <Router>
          <Container padding={40}>
            <Nav/>
      
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/shoppingbag" component={ShoppingBag}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/products/:category/:id" component={Product}/>
            
            <Footer/>
          </Container>
        </Router>
      );
  }
}







export default App;
