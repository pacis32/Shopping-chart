

import React, { Component } from 'react'
import './App.css';
import Navibar from './Components/Navbar'
import Product from './Components/Products'
import Cart from './Components/Cart'
import Default from './Components/Default'
import Details from './Components/Details'
import ProductList from './Components/ProductList'
import Products from './Components/Products'
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component  {

  constructor(props) {
    super(props);
    this.state = {
        products: [], filteredProducts: []

    }

}
componentWillMount(){
  fetch(' http://localhost:8000/products')
      .then(res => JSON)

      .then(data => this.setState({
          products: data,
          filteredProducts: data
      }));
    }
  render(){
    return (
      <React.Fragment>
     
      <Navibar/>
        <Switch>
          <Route exact path="/" component={Products}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        </React.Fragment>
       
       
      
    );
  }
  }
    
  
