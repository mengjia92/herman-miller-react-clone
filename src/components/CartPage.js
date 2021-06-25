import React, {Component} from "react";
import {connect} from "react-redux";
import CartContent from "./CartContent";

class CartPage extends Component {

    renderCartHeader() {
        return (
            <div className="cartHeader">
                <h1 className="cartTitle">Your Cart</h1>
                <span>{"Not quite ready to check out? "}
                    <span className="link">Continue Shopping</span>
                </span>
            </div>
        )
    }

    render() {
        return (
            <div className="cart">
                <div>{this.renderCartHeader()}</div>
                <div>
                    {this.props.cartData.length === 0 ? <div/> : <CartContent/>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartData: state.cartReducer.itemsInCart
    }
}

export default connect(mapStateToProps)(CartPage);