import React from 'react';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

import './App.css';
import Navibar from './Components/Navbar'
import Cart from './containers/cart'
import Default from './Components/Default'
import Details from './Components/Details'
import ProductList from './Components/ProductList'
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(
  rootReducer,
  composeWithDevTools()
  //
)


const App =()=> {


    return (
      <React.Fragment>
      <Provider store={store}>
      <Navibar/>
        <Switch>
          <Route exact path="/" component={ProductList}/> 
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        </Provider> 
      </React.Fragment>
      
    );
  }
  


export default App;