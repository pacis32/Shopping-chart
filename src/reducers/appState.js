import {cartActions,homeActions} from '../constants/actions'

const initialState = {
  islogedIn:false
}

function appState(state = initialState,action){
    switch(action.type){

        case "UPDATE_LOGIN":
            return Object.assign({},state,{
                islogedIn:action.payload
            })
        default:
            return state;
    }
}

export default appState;