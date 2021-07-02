import React, {Component} from "react";
import "../HMChairs.css";
import {Link} from "react-router-dom";
import logo from "../assets/HMlogo.png";
import ShoppingCart from "./cart/ShoppingCart";

class NaviBar extends Component {
    render() {
        return (
            <div className="naviBar">
                <div className="naviBarLeft">
                    <img src={logo} className="logo" alt="logo"/>
                    <div className="search">
                        <span style={{margin: "0 13px"}}><i className="fas fa-search"/></span>
                        <input className="searchBar" type="search" placeholder="Search"/>
                    </div>

                </div>
                <div style={{width: "60%"}}>
                    <div className="naviBarCenter">
                        <Link to="/" style={{color: "rgba(128, 128, 128, 0.9)", textDecoration: "none"}}>
                            <span className="navi-span" style={{borderBottom: "1px solid rgb(37, 37, 37)"}}>Office Chairs</span>
                        </Link>
                        <span className="navi-span">Work From Home</span>
                        <span className="navi-span">Gaming</span>
                        <span className="navi-span">Furniture</span>
                        <span className="navi-span">Lighting</span>
                        <span className="navi-span">Decor</span>
                    </div>
                </div>
                <div className="naviBarRight">
                    <div className="user-account-dropdown">
                        <i className="fas fa-user" style={{cursor: "pointer"}}/>
                        <div className="user-account-dropdown-content">
                            <span className="account-btn">Login</span>
                            <span className="account-btn">Register</span>
                        </div>
                    </div>
                    <i className="fas fa-heart" style={{cursor: "pointer"}}/>
                    <ShoppingCart/>
                </div>
            </div>
        )
    }
}

export default NaviBar;