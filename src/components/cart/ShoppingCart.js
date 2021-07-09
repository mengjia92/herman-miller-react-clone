import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../../HMChairs.css";
import {connect} from "react-redux";
import {formatter} from "../../helper";

class ShoppingCart extends Component {
    render() {
        console.log(this.props.cartData.itemsInCart)
        return (
            <div className="user-account-dropdown">
                <Link to="/cart" style={{color: "black"}}>
                    <i className="fas fa-shopping-cart"/>
                </Link>
                <span className="itemNum">{this.props.cartData.quantity}</span>
                <div className="cart-dropdown-content">
                    {this.props.cartData.itemsInCart.length === 0 ?
                        <span className="cart-title" style={{marginTop: "20px"}}>Your Cart is Empty</span>
                        : <div>
                            <div className="cart-title" >Cart Contents</div>
                            <div>
                                {this.props.cartData.itemsInCart.map((item, idx) => {
                                    return (
                                        <div key={idx} className="cart-preview">
                                            <div>
                                                <img src={item.chairObj.media.split("|")[0]} style={{width: "100px"}} alt={item.chairObj.name}/>
                                            </div>
                                            <div className="cart-preview-info">
                                                <span><span style={{fontWeight: "bold"}}>Product: </span>{item.chairObj.name}</span>
                                                <span><span style={{fontWeight: "bold"}}>Price: </span>{"C" + formatter.format(item.customizedPrice)}</span>
                                                <span><span style={{fontWeight: "bold"}}>Quantity: </span>{item.qty}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
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

