import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../HMChairs.css";
import {connect} from "react-redux";

class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <Link to="/cart" style={{color: "black"}}>
                    <i className="fas fa-shopping-cart"/>
                </Link>
                <span className="itemNum">{this.props.cartData.quantity}</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartData: state.cartReducer
    }
}

export default connect(mapStateToProps)(ShoppingCart);

