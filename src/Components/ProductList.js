import React, { Component } from 'react'
import Products from './Products';

export const  ProductList =()=>{

            return (
                <div>
             <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>
                </div>
            )
    
    
}  
