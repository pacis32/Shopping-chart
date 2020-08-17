
import axios from 'axios'
//import cart action constants 
import {cartActions} from '../constants/actions'

export const fetchCartList = async (url,dispatch)=>{
    //all logics to extract data u want
  try {
    let response  = await axios.get(url);
    console.log(response)
    if(response.status===200){
        let cartList = response.data;
        //filtering all data retrieved from api 
        let carts = cartList.filter(item=>item.title && item.title.indexOf("Chelsea")!=-1|| item & item.date>new Date()); 
        let action = {type:cartActions.fetchCartData,payload:carts};
        //disptach action to the reducer
        dispatch(action);
    }else{
        throw  new Error("Invalid response")
    }
  } catch (error) {
      console.error("api Call failed",error)
  }

}

export const deleteCartItem =  (url,cartgId)=>{
    axios.post(url,{
        data:cartgId
    })
}