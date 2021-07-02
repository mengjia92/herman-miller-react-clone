import React, {Component} from "react";
import "../../HMChairs.css";
import {connect} from "react-redux";
import {act3Columns, act4Columns} from "../../actions";
import threeBlocks from "../../assets/three.svg";
import fourBlocks from "../../assets/four.svg";

class ChairListHeader extends Component {

    state = {
        priceIsClicked: false,
        materialIsClicked: false,
    }

    priceIsClicked = () => {
       this.setState({
           priceIsClicked: !this.state.priceIsClicked,
           materialIsClicked: false
       })}

    materialIsClicked = () => {
        this.setState({
            materialIsClicked: !this.state.materialIsClicked,
            priceIsClicked: false
        })}

    switchColumnNum = () => {
        const blockStatus = this.state.blockStatus;
        this.setState({blockStatus: !blockStatus})
    }

    render() {
        return (
            <div className="contentHeader">
                <div className="listCategory">
                    <span>Home
                        <span style={{margin: "0 8px"}}>{">"}</span>
                        Office
                        <span style={{margin: "0 8px"}}>{">"}</span>
                        Office Chairs
                    </span>
                </div>
                <h1>Office Chairs</h1>
                <div className="optionBar">
                    <div className="optionBarLeft">
                        <div className="dropdown">
                            <div className="sortArea">
                                <span className="sort-title">Price</span>
                                <span style={{paddingLeft: "7px", cursor: "pointer"}}
                                      onClick={this.priceIsClicked}>
                                    <i className="fas fa-caret-down"/>
                                </span>
                            </div>
                            <div className={this.state.priceIsClicked ? "display-dropdown-content" : "dropdown-content"}>
                                <div>
                                    <input type="checkbox" id="1"/>
                                    <label htmlFor="1">$100 or less (1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="2"/>
                                    <label htmlFor="2">$500 - %1,000 (14)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="3"/>
                                    <label htmlFor="3">$1,000 - $2,000 (11)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="4"/>
                                    <label htmlFor="4">$2,000 - $3,000 (8)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="5"/>
                                    <label htmlFor="5">$3,000 - $5,000 (5)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="6"/>
                                    <label htmlFor="6">Above $5,000 (1)</label>
                                </div>
                                <div className="close-btn" onClick={this.priceIsClicked}>Close</div>
                            </div>
                        </div>

                        <div className="dropdown">
                            <div className="sortArea">
                                <span className="sort-title">Material</span>
                                <span style={{paddingLeft: "7px", cursor: "pointer"}}
                                      onClick={this.materialIsClicked}>
                                    <i className="fas fa-caret-down"/>
                                </span>
                            </div>
                            <div className={this.state.materialIsClicked ? "display-dropdown-content" : "dropdown-content"}>
                                <div>
                                    <input type="checkbox" id="11"/>
                                    <label htmlFor="11">Fabric (8)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="12"/>
                                    <label htmlFor="12">Leather (9)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="13"/>
                                    <label htmlFor="13">Plastic (2)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="14"/>
                                    <label htmlFor="14">Combination (1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="15"/>
                                    <label htmlFor="15">Epic (1)</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="16"/>
                                    <label htmlFor="16">MCL Leather (1)</label>
                                </div>
                                <div className="close-btn" onClick={this.materialIsClicked}>Close</div>
                            </div>
                        </div>

                        <div className="sortArea">
                            <span className="sort-title" style={{paddingRight: "10px"}}>Sort By:</span>
                            <select className="sort-by" name="productFeature" id="productFeature">
                                <option value="0">Featured Product</option>
                                <option value="1">Price High to Low</option>
                                <option value="2">Price Low to High</option>
                                <option value="3">Name A to Z</option>
                                <option value="4">Name Z to A</option>
                                <option value="5">Average Rating</option>
                            </select>
                        </div>
                    </div>

                    <div className="optionBarRight">
                        <h4 style={{margin: "0"}}>showing 10 of 10 items</h4>
                        <div className="three-blocks-icon" onClick={this.props.act3Columns}
                             style={this.props.switchColumn ? {opacity: "1"} : {opacity: "0.3"}}>
                            <img src={threeBlocks} alt="3 columns"/>
                        </div>
                        <div className="four-blocks-icon" onClick={this.props.act4Columns}
                             style={this.props.switchColumn ? {opacity: "0.3"} : {opacity: "1"}}>
                            <img src={fourBlocks} alt="4 columns"/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        switchColumn: state.switchColumnNumReducer.changeColumns
    }
}

export default connect(mapStateToProps, {act3Columns, act4Columns})(ChairListHeader);