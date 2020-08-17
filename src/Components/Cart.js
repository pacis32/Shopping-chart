import React from 'react';


function Cart({cartList}) {
  return (
    <div >
     {cartList && cartList.length && cartList.map((item,index)=>{
       return(
         <div>
           <h2>Name:</h2>{item.title}
           </div>
       )
     })
    }
    
    </div>
  );
}

export default Cart;
