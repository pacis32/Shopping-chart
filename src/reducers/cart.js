import {cartActions,homeActions} from '../constants/actions'
const initialState = {
  data:[],
  islogedIn:false
}

function cartreducer(state = initialState,action){
    switch(action.type){
        case cartActions.fetchCartData:
            return Object.assign({},state,{
             data:action.payload
            })
            
        case "UPDATE_LOGIN":
            return Object.assign({},state,{
                islogedIn:action.value
            })
        default:
            return state;
    }
}

export default cartreducer;