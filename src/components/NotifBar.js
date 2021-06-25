import React, {Component} from "react";
import "../HMChairs.css";

class NotifBar extends Component {
    render() {
        return (
            <div className="notif-bar">
                <span style={{width: "33.33%"}}/>
                <span className="notif-info">We're experiencing shipping delays. Track my online order.</span>
                <span className="support">
                    REGIONS
                    <span style={{margin: "0 8px"}}>-</span>
                    LOCATIONS
                    <span style={{margin: "0 8px"}}>-</span>
                    SUPPORT
                </span>
            </div>
        )
    }
}

export default NotifBar;