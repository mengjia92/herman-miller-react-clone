import React, {Component} from "react";
import {connect} from "react-redux";
import "../../HMChairs.css";
import {formatter} from "../../helper";
import {actAddToCart} from "../../actions";

class BottomCart extends Component {

    state = {
        quantity: 1
    }

    increQty = () => {
        this.setState({quantity: this.state.quantity + 1})
    }

    decreQty = () => {
        if (this.state.quantity >= 1) {
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    addToCart = (chairObj, customizedPrice, qty, checkedIdx) => {
        let newChairObj = {chairObj, customizedPrice, qty, checkedIdx};
        if (qty > 0) {
            this.props.actAddToCart(newChairObj);
        }
    }

    render() {
        const {chairName, subtotal, singleChairState} = this.props;
        const {checkedIdx, chairObj} = singleChairState;

        return (
            <div className="bottom-cart">
                <h3>{chairName}</h3>
                <div className="bottom-cart-right">
                    <div>
                        <i className="fas fa-truck-loading fa-lg"/>
                        <span style={{paddingLeft: "10px"}}>In Stock</span>
                    </div>
                    <span className="single-subtotal">
                        {"C" + formatter.format(subtotal)}
                    </span>
                    <div className="chairQuantity">
                        <button className="plus-minus-btn" onClick={this.decreQty}>
                            &#8722;
                        </button>
                        <span className="quantity" style={{width: "40px"}}>{this.state.quantity}</span>
                        <button className="plus-minus-btn" onClick={this.increQty}>
                            &#43;
                        </button>
                    </div>
                    <button className="new-cart-btn" onClick={event => this.addToCart(chairObj, subtotal, this.state.quantity, checkedIdx)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
};


export default connect(mapStateToProps, {actAddToCart})(BottomCart);