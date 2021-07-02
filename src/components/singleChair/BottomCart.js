import React, {Component} from "react"
import "../../HMChairs.css";
import {formatter} from "../../helper";

class BottomCart extends Component {
    render() {
        return (
            <div className="bottom-cart">
                <h3>{this.props.chairName}</h3>
                <div className="bottom-cart-right">
                    <div>
                        <i className="fas fa-truck-loading fa-lg"/>
                        <span style={{paddingLeft: "10px"}}>In Stock</span>
                    </div>
                    <span style={{fontWeight: "bold", fontSize: "20px"}}>{"C" + formatter.format(this.props.subtotal)}</span>
                    <div className="chairQuantity">
                        <button className="plus-minus-btn">
                            &#8722;
                        </button>
                        <span className="quantity" style={{width: "40px"}}>1</span>
                        <button className="plus-minus-btn">
                            &#43;
                        </button>
                    </div>
                    <button className="new-cart-btn">
                        Add to Cart
                    </button>
                </div>
            </div>
        )
    }
}

export default BottomCart;