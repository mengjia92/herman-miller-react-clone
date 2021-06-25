import React, {Component} from "react";
import "../HMChairs.css";
import {connect} from "react-redux";
import {actFetchChairData, actAddToCart} from "../actions";

class ChairListContent extends Component {

    componentDidMount() {
        this.props.actFetchChairData();
    }

    render() {
        let formatter = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD',
        })

        return (
            <div className={this.props.switchColumn ? "chair-list three-columns" : "chair-list four-columns"}>
                {this.props.chairData.map((item, idx) => {
                    return (
                        <div key={idx} className="eachChair">
                            <img src={item.media.split("|")[0]}
                                 className="defaultChairImg"
                                 alt={item.name}/>
                            <img src={item.media.split("|")[1]}
                                 className="altChairImg"
                                 alt={item.name}/>
                            <div className="chairInfo">
                                <h4 style={{margin: "0"}}>{item.name}</h4>
                                <span>{"C" + formatter.format(item.price)}</span>
                                <div className="chairColors">
                                    <div className="foo white"/>
                                    <div className="foo wine"/>
                                    <div className="foo midnightblue"/>
                                    <div className="foo skyblue"/>
                                    <div className="foo black"/>
                                    <div className="foo grey"/>
                                </div>
                                <span style={{color: "red"}}>Free Shipping on Everything</span>
                                {/*<button className="cartBtn"*/}
                                {/*        onClick={() => this.props.actAddToCart(item)}>*/}
                                {/*    Add to Cart*/}
                                {/*</button>*/}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chairData: state.fetchChairDataReducer,
        switchColumn: state.switchColumnNum.changeColumns,
        cartData: state.cartReducer
    }
}

export default connect(mapStateToProps, {actFetchChairData, actAddToCart})(ChairListContent);