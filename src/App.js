import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from "react";
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
    } from "react-router-dom";
import Products from './Components/Products'
import store from './store'
import { Provider } from "react-redux";
import Navbar from "./Components/Navbar";
import Basket from './Components/Basket'
import Filter from './Components/Filter';


    
   
    
     const App=() =>{
      
      return (
        <Provider store={store}>
        <Router>
          <div>
            <Navbar/>

            <Switch>

              <Route exact path="/">
                <Products />
              </Route>
              <Route  path="/cart">
                <Basket />
              </Route>
              <Route  path="/filter">
                <Filter />
              </Route>
            </Switch>
          </div>
        </Router>
        </Provider>
      );
    }
    
    
    
    export default App;


