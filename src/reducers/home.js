import {cartActions,homeActions} from '../constants/actions'

const initialState = {
  productList:[],
  islogedIn:false
}

function cartreducer(state = initialState,action){
    switch(action.type){
        case homeActions.fetchAllProducts:
            return Object.assign({},state,{
             productList:action.payload
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