import React, {Component} from "react";
import {connect} from "react-redux";
import CartContent from "./CartContent";
import "../../HMChairs.css";
import {Link} from "react-router-dom";


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
                {this.props.cartData.length === 0 ?
                    <div className="cartHeader">
                        <h1 className="cartTitle">Your Cart</h1>
                        <span>Looks like your cart is empty. Continue shopping or view your account to see items you may have saved before.</span>
                        <div className="button-row">
                            <button className="checkoutBtn" style={{width: "90%"}}>
                                {this.props.isSignedIn ? "View Your Account"
                                : <Link to="/login" style={{color: "white", textDecoration: "none"}}>
                                    Sign In
                                </Link>}
                            </button>
                            <button className="checkoutBtn continue-shopping-btn">Continue Shopping</button>
                        </div>
                    </div>
                    : <div>
                        {this.renderCartHeader()}
                        <CartContent/>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartData: state.cartReducer.itemsInCart,
        isSignedIn: state.userReducer.isSignedIn
    }
}

export default connect(mapStateToProps)(CartPage);