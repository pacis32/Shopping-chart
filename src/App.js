import React from 'react';
import TshirtList from './TshirtList'
import './App.css';
import Navibar from './Components/Navbar'
import Cart from './Components/Cart'
import Default from './Components/Default'
import Details from './Components/Details'
import Product from './Components/Product'
import ProductList from './Components/ProductList'



function App() {
  return (
    <React.Fragment>
    <div >
      <h2>Hello Shoppers</h2>
      <Navibar/>
      <ProductList/>
      <Cart/>
      <Details/>
      <Default/>
    </div>
    </React.Fragment>
    
  );
}

export default App;
