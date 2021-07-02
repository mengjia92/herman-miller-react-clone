import React, {Component} from "react";
import {connect} from "react-redux";
import "../../HMChairs.css";
import {actIncrement, actDecrement, actRemove} from "../../actions";
import {formatter} from "../../helper";

class CartContent extends Component {

    render() {
        let subtotal = this.props.calculateTotal();

        return (
            <div>
                <div className="cartContent">
                    {this.props.cartData.map((item, idx) => {
                        return (
                            <div key={idx} style={{borderBottom: "1px solid lightgrey"}}>
                                <div className="eachItem">
                                    <img className="imgThumbnail" src={item.media.split("|")[0]}
                                         alt={item.name}/>
                                    <h4 style={{margin: "0", width: "15%"}}>{item.name}</h4>
                                    <span>{"C" + formatter.format(item.price)}</span>
                                    <div className="chairQuantity">
                                        <button className="plusMinusBtn" onClick={() => this.props.actDecrement(idx)}>
                                            &#8722;
                                        </button>
                                        <span className="quantity">{item.count}</span>
                                        <button className="plusMinusBtn" onClick={() => this.props.actIncrement(idx)}>
                                            &#43;
                                        </button>
                                    </div>
                                    <span className="eachItemTotal">
                                        {"C" + formatter.format(item.count * item.price)}
                                    </span>
                                </div>
                                <div className="removeItem">
                                    <span className="link">Move to Favorites</span>
                                    <div className="removeBtn">
                                        <i className="fas fa-trash fa-lg"/>
                                        <span className="link" style={{marginLeft: "30px"}}
                                              onClick={() => this.props.actRemove(idx)}>
                                            Remove
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="checkout">
                    <div className="checkoutDetails">
                        <div className="checkoutLayout">
                            <span>SUBTOTAL</span>
                            <span>SALES TAX (13%)</span>
                            <span>SHIPPING</span>
                            <div>
                                <span style={{textDecoration: "underline"}}>APPLY PROMO CODE</span>
                                <span style={{marginLeft: "5px"}}>&#43;</span>
                            </div>
                        </div>
                        <div className="checkoutLayout right">
                            <span>{"C" + formatter.format(subtotal)}</span>
                            <span>{"C" + formatter.format(subtotal * 0.13)}</span>
                            <span>FREE</span>
                        </div>
                    </div>
                    <div className="totalAmount">
                        <span className="total">TOTAL</span>
                        <span className="total right">{"C" + formatter.format(subtotal * 1.13)}</span>
                    </div>
                    <button className="checkoutBtn">Checkout</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartData: state.cartReducer.itemsInCart,
        calculateTotal() {
            let total = 0;
            state.cartReducer.itemsInCart.forEach((item) => {
                total += (item.price * item.count);
            })
            return total;
        }
    }
}

export default connect(mapStateToProps, {actIncrement, actDecrement, actRemove})(CartContent);