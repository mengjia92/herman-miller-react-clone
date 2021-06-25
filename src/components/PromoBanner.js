import React, {Component} from "react";
import "../HMChairs.css";

class PromoBanner extends Component {

    state = {
        isClicked: false
    }

    removeBanner = () => {
        this.setState({isClicked: !this.state.isClicked})
    }

    render() {
        return (
            <div className="promo-banner"
                 style={this.state.isClicked ? {display: "none"} : {display: "block"}}>
                <div className="promo-banner-text">
                    <span>Enjoy Free Shopping on Office Chairs + 0% Financing Available</span>
                </div>
                <div className="promo-banner-close" onClick={this.removeBanner}>
                    <span>
                        <i className="fas fa-times"></i>
                    </span>
                </div>

            </div>

        )
    }
}

export default PromoBanner;