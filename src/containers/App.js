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
import { PageWidth } from '../theme/Grid'
import CategoryList from '../components/CategoryList'
import Register from './Register'



class App extends Component {
  render() {
      return (
        <Router>
        <div>
            <Nav/>
            <PageWidth>
              <CategoryList/>
              <Route exact path="/" component={Shop}/>
              <Route path="/shoppingbag" component={ShoppingBag}/>
              <Route path="/products/:category/:id" component={Product}/>
              <Route path="/account/login" component={Login}/>
              <Route path="/account/register" component={Register}/>
            </PageWidth>
            <Footer/>
        </div>
        </Router>
      );
  }
}







export default App;
