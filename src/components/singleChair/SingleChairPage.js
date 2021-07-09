import React, {Component} from "react"
import "../../HMChairs.css";
import {connect} from "react-redux";
import {actFetchSingleChair} from "../../actions";
import BottomCart from "./BottomCart";
import {formatter} from "../../helper";

class SingleChairPage extends Component {
    state = {
        checkedIdx: [],
        checkedPrice: [],
        chairObj: {},
        currImgIdx: 0,
        isScaled: false
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.actFetchSingleChair(id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.singleChair !== this.props.singleChair) {
            let chairObj = this.props.singleChair;

            if (chairObj.profileCategories) {
                let tempIdx = [],
                    tempPrice = [];
                for (let i = 0; i < chairObj?.profileCategories?.length; i++ ) {
                    for (let j = 0; j < chairObj?.profileCategories[i]?.profileItems.length; j++) {
                        if (chairObj.profileCategories[i].profileItems[j].checked) {
                            tempIdx.push(j);
                            tempPrice.push(chairObj.profileCategories[i].profileItems[j].price)
                        }
                    }
                }
                this.setState({
                    checkedIdx: tempIdx,
                    checkedPrice: tempPrice,
                    chairObj: chairObj
                })
            }
        }
    }

    selectImg = (i) => {
        this.setState({
            currImgIdx: i,
            isScaled: false
        })}

    magnifyImg = () => {
        this.setState({
            isScaled: !this.state.isScaled
        })}

    selectMaterials = (idx, price, idx1) => {
        let updatedIdx = this.state.checkedIdx,
            updatedPrice = this.state.checkedPrice,
            updatedObj = this.state.chairObj;
        updatedIdx[idx] = idx1;
        updatedPrice[idx] = price;

        for (let i = 0; i < updatedObj?.profileCategories?.length; i++) {
            for (let j = 0; j < updatedObj?.profileCategories[i]?.profileItems?.length; j++) {
                j === updatedIdx[idx] ? updatedObj.profileCategories[i].profileItems[j].checked = true :
                    updatedObj.profileCategories[i].profileItems[j].checked = false
            }
        }
        this.setState({chairObj: updatedObj})
    }


    render() {
        let item = this.props.singleChair?.profileCategories,
            customizedSum = 0;
        for (let i = 0; i < item?.length; i++) {
            for (let j = 0; j < item[i]?.profileItems?.length; j++) {
                if (item[i].profileItems[j].checked) {
                    customizedSum += Number(item[i].profileItems[j].price);
                }
            }
        }

        return (
            <div>
                <div className="single-chair-container">
                    <div className="listCategory" style={{padding: "1% 0"}}>
                        <span>Home
                            <span style={{margin: "0 8px"}}>{">"}</span>
                            Office
                            <span style={{margin: "0 8px"}}>{">"}</span>
                            Office Chairs
                            <span style={{margin: "0 8px"}}>{">"}</span>
                            {this.props.singleChair.name}
                        </span>
                    </div>

                    <div style={{margin: "1% 0"}}>
                        <div className="single-chair-content">
                            <div className="img-gallery">
                                <div className="img-thumbnails">
                                    {this.props.singleChair?.media?.split("|").slice(0, 5).map((pic, idx) => {
                                        return (
                                            <div key={idx} className="each-thumbnail"
                                                 style={this.state.currImgIdx === idx ? {border: "2px solid #e22d00", margin: "-2px"} : {border: "none"}}>
                                                <img src={pic} alt={`img${idx}`} onClick={() => this.selectImg(idx)}
                                                     style={{width: "90%", margin: "3px"}}/>
                                            </div>
                                            )
                                    })}
                                    <button className="more-btn">{`+${this.props.singleChair?.media?.split("|").length - 5} MORE`}</button>
                                </div>
                                <div className="img-display">
                                    <div className="img-cover">
                                        <img src={this.props.singleChair?.media?.split("|")[this.state.currImgIdx]} alt="display img"
                                             onClick={this.magnifyImg}
                                             style={this.state.isScaled ? {transform: "scale(1.3)", cursor: "zoom-out"} : {transform: "none", cursor: "zoom-in"}}
                                             className="img-display-selected"/>
                                    </div>
                                </div>
                            </div>
                            <div className="single-chair-info">
                                <span className="single-chair-name">{this.props.singleChair.name}</span>
                                <span style={{color: "rgba(128, 128, 128, 0.9)"}}>{this.props.singleChair.slug}</span>
                                <div className="ratings">
                                    <span style={{color: "#e22d00"}}><i className="fas fa-star"/></span>
                                    <span style={{color: "#e22d00"}}><i className="fas fa-star"/></span>
                                    <span style={{color: "#e22d00"}}><i className="fas fa-star"/></span>
                                    <span style={{color: "#e22d00"}}><i className="fas fa-star"/></span>
                                    <span style={{color: "#e22d00"}}><i className="fas fa-star-half-alt"/></span>
                                </div>
                                <span style={{fontSize: "20px"}}>{"C" + formatter.format(this.props.singleChair.price)}</span>
                                <div>
                                    <div className="warranty-term">
                                        <span style={{color: "#e22d00", marginRight: "10px"}}><i className="fas fa-check"/></span>
                                        <span>12-Year Warranty</span>
                                    </div>
                                    <div className="warranty-term">
                                        <span style={{color: "#e22d00", marginRight: "10px"}}><i className="fas fa-check"/></span>
                                        <span>Free Standard Shipping</span>
                                    </div>
                                    <div className="warranty-term">
                                        <span style={{color: "#e22d00", marginRight: "10px"}}><i className="fas fa-check"/></span>
                                        <span>30-Day No Hassle Return</span>
                                    </div>
                                </div>
                                <span style={{color: "#e22d00"}}>Free Shipping on Everything</span>
                                <div className="profile-categories">
                                    {this.props.singleChair?.profileCategories?.map((item, idx) => {
                                        return (
                                            <div key={idx} style={{marginBottom: "20px"}}>
                                                <div className="profile-categories-title">{item.name}</div>
                                                <div>
                                                    {item.profileItems?.map((item1, idx1) => {
                                                        return (
                                                            <div key={idx1} className="selectable"
                                                                 onClick={() => this.selectMaterials(idx, item1.price, idx1)}>
                                                                <span>
                                                                    {idx1 === this.state.checkedIdx[idx] ?
                                                                        <i className="fas fa-check-circle" style={{color: "green"}}/> : <i className="far fa-circle"/>}
                                                                </span>
                                                                <span style={{fontSize: "15px"}}>{item1.name}</span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <span style={{color: "rgba(128, 128, 128, 0.7)", fontSize: "14px"}}>Item No.99999 99999</span>
                                <div className="single-chair-page-action">
                                    <span>Save to Wish List</span>
                                    <span>Print</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="production-description">
                        <span className="description-title">Description</span>
                        <div className="description-summary">
                            <span style={{width: "40%", lineHeight: "1.6"}}>{this.props.singleChair.description}</span>
                            <div style={{width: "40%", textAlign: "left"}}>
                                <h4 style={{marginTop: "0", marginLeft: "-15px"}}>Key Features</h4>
                                <ul className="key-features-list">
                                    <li>12-Year Warranty</li>
                                    <li>Named 100 Best Inventions By Time Magazine In 2019</li>
                                    <li>Auto-Harmonic™ Tilt Mechanism Automatically Adjusts</li>
                                    <li>Flexible Frame</li>
                                    <li>Continuous And Breathable Seat And Back</li>
                                    <li>One Adjustment For Height</li>
                                    <li>Wrap-Top Facilitates Casual Collaboration</li>
                                    <li>Available In Three Arm Styles: Fixed, Fully Adjustable, and Leaf</li>
                                    <li>Dipped-In-Color Option</li>
                                    <li>Made In Michigan At A 100% Green-Energy Facility</li>
                                    <li>For Questions About Lead Times, In-Stock Options Or Delivery Please Give Usa Call At 888.798.0202.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <BottomCart chairName={this.props.singleChair.name}
                            singleChairState = {this.state}
                            subtotal={customizedSum + Number(this.props.singleChair.price)}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        singleChair: state.fetchChairDataReducer.singleChairData
    }
}

export default connect(mapStateToProps, {actFetchSingleChair})(SingleChairPage);