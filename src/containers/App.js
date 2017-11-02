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
import Login from './Login'
import CategoryList from '../components/CategoryList'
import Register from './Register'
import Admin from './Admin'
import { connect } from 'react-redux'
import { getAllProducts } from '../actions'


class App extends Component {

  componentDidMount(){
    this.props.getAllProducts()
  }
  render() {
    
      return (
        <Router>
          <div>
            <Nav/>
              <CategoryList/>
              <Route exact path="/" component={Shop}/>
              <Route path="/shoppingbag" component={ShoppingBag}/>
              <Route path="/products/:category/:id" component={Product}/>
              <Route path="/account/login" component={Login}/>
              <Route path="/account/register" component={Register}/>
              <Route path="/account/admin" component={Admin} />
            <Footer/>
          </div>
        </Router>
      );
  }
}

export default connect(null,{getAllProducts})(App);
