import {combineReducers} from 'redux'
import cartReducer from './cart'
import homerReducer from './home'
import appState from './appState';


const routeReducer = combineReducers({
    cart:cartReducer,
    home:homerReducer,
    appState:appState
})

export default routeReducer;