import React, { Component ,Fragment} from 'react'
import CartComponent from '../Components/Cart'
import {fetchCartList,deleteCartItem} from '../actions/cart'
import {connect} from 'react-redux'

  class Cart extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        fetchCartList("hhttp://localhost:8000/products",this.props.dispatch);
    }

    componentDidUpdate(){
        console.log("Update")
    }

    render() {
        return (
           <Fragment>
               {/* pass cart data in cart componet through props */}
               <CartComponent cartList={this.props.cartList} dispatch={this.props.dispatch} isLoggedIn={this.props.appState && this.props.appState.isLoggedIn || false}/>
           </Fragment>
        )
    }
}
//connect store and container and makes state available in container's props
//disptach comes from store, to update reducer with action
const mapPropsToState = (state)=>({
        cartList:state.cart && state.cart.data ||[],
        home:state.home ||[],
        appState:state.appState || []
})

export default connect(mapPropsToState)(Cart)