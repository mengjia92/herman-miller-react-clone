import React, {Component} from "react";
import {connect} from "react-redux";
import "../../HMChairs.css";
import {actChangeQty, actRemove} from "../../actions";
import {formatter} from "../../helper";
import {Link} from "react-router-dom";


class CartContent extends Component {

    changeQty = (idx, qty) => {
        this.props.actChangeQty(idx, qty)
    }

    render() {
        let subtotal = this.props.calculateTotal();

        return (
            <div>
                <div className="cartContent">
                    {this.props.cartData.map((item, idx) => {
                        return (
                            <div key={idx} style={{borderBottom: "1px solid lightgrey"}}>
                                <div className="eachItem">
                                    <img className="imgThumbnail"
                                         src={item.chairObj.media.split("|")[0]}
                                         alt={item.chairObj.name}/>
                                    <div style={{width: "25%", marginLeft: "2%"}}>
                                        <div style={{fontWeight: "bold", textDecoration: "underline", fontSize: "15px", marginBottom: "10px"}}>
                                            {item.chairObj.name}
                                        </div>
                                        {item.chairObj.profileCategories.map((k1, idx1) => {
                                            return (
                                                <div key={idx1} style={{fontSize: "13px", lineHeight: "1.7em"}}>
                                                    {k1.profileItems.map((k2, idx2) => {
                                                        if (item.checkedIdx[idx1] === idx2) {
                                                            return (
                                                                <div key={idx2}>
                                                                    <span style={{fontWeight: "bold"}}>{k1.name}: </span>
                                                                    {k2.name}</div>
                                                            )}
                                                    })}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <span>{"C" + formatter.format(item.customizedPrice)}</span>
                                    <div>
                                        <select defaultValue={item.qty} style={{height: "32px", width: "55px", paddingLeft: "5px"}}
                                                onChange={(event) => this.changeQty(idx, event.target.value)}>
                                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => {
                                                return (
                                                    <option value={num} key={i}>{num}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <span className="eachItemTotal">
                                        {"C" + formatter.format(item.qty * item.customizedPrice)}
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
                    <button className="checkoutBtn">{this.props.isSignedIn ? "Checkout"
                        : <Link to="/login" style={{color: "white", textDecoration: "none"}}>
                            Sign In
                        </Link>}
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartData: state.cartReducer.itemsInCart,
        isSignedIn: state.userReducer.isSignedIn,

        calculateTotal() {
            let total = 0;
            state.cartReducer.itemsInCart.forEach((item) => {
                total += (item.customizedPrice * item.qty);
            })
            return total;
        }
    }
}

export default connect(mapStateToProps, {actChangeQty, actRemove})(CartContent);