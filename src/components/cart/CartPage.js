import React, {Component} from "react";
import {connect} from "react-redux";
import CartContent from "./CartContent";
import "../../HMChairs.css";
import {Link} from "react-router-dom";
import {actCreateOrder, actFetchCart} from "../../actions";


class CartPage extends Component {
    state = {
        refresh: false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('update-24', prevProps)
        if (prevProps.backToPage !== this.props.backToPage) {
            this.props.actFetchCart();
            this.setState({refresh: !this.state.refresh})
        }
        if (prevProps.reLogin !== this.props.reLogin) {
            this.props.history.push('/login')
        }
    }

    checkout = () => {
        if (localStorage.getItem("TOKEN")) {
            this.props.actCreateOrder(this.props.cartData)
        } else {
            this.props.history.push('/login')
        }
    }


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
                        <CartContent checkout={this.checkout}/>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartData: state.cartReducer.itemsInCart,
        isSignedIn: state.userReducer.isSignedIn,
        backToPage: state.orderReducer.backToPage,
        reLogin: state.orderReducer.reLogin,
    }
}

export default connect(mapStateToProps, {actCreateOrder, actFetchCart})(CartPage);