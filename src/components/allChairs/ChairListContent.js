import React, {Component} from "react";
import "../../HMChairs.css";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {actFetchChairData, actAddToCart} from "../../actions";
import {formatter} from "../../helper";

class ChairListContent extends Component {

    componentDidMount() {
        this.props.actFetchChairData();
    }

    render() {
        return (
            <div className={this.props.switchColumn ? "chair-list three-columns" : "chair-list four-columns"}>
                {this.props.chairData.map((item, idx) => {
                    return (
                        <div key={idx} className="eachChair">
                            <Link to={`/product/${item.id}`}>
                                <div className="chairImg">
                                    <img src={item.media.split("|")[0]}
                                         className="defaultChairImg"
                                         alt={item.name}/>
                                    <img src={item.media.split("|")[1]}
                                         className="altChairImg"
                                         alt={item.name}/>
                                </div>
                            </Link>
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
        chairData: state.fetchChairDataReducer.allChairData,
        switchColumn: state.switchColumnNumReducer.changeColumns
    }
}

export default connect(mapStateToProps, {actFetchChairData, actAddToCart})(ChairListContent);