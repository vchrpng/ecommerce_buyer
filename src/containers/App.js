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



class App extends Component {
  render() {
    return (
      <Router>
      <div>
     
        <Nav/>
     
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/shoppingbag" component={ShoppingBag}/>
        <Route path="/shop" component={Shop}/>
    
        <hr/>
      

        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
