import React, {Component} from "react";
import "../HMChairs.css";

class FooterArea extends Component {
    render() {
        return (
            <div className="footer">
                <div>
                    <h4>Customer Service</h4>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                    <p>Returns and Exchanges</p>
                    <p>Shipping and Delivery</p>
                    <p>Warranty and Service</p>
                    <p>Site Feedback</p>
                    <p>Track Your Order</p>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div>
                        <h4>News & Resources</h4>
                        <p>For Business</p>
                    </div>
                    <div>
                        <h4>Locations</h4>
                        <p>Our Retail Stores</p>
                        <p>Visit a Store</p>
                    </div>
                </div>
                <div>
                    <h4>Company</h4>
                    <p>About Us</p>
                    <p>Our Designers</p>
                    <p>Our Brands</p>
                    <p>Request a Catalog</p>
                    <p>Careers</p>
                    <p>Site Feedback</p>
                </div>
                <div className="social-media">
                    <div style={{marginBottom: "5%", height: "35%"}}>
                        <h4 style={{marginBottom: "3%"}}>Newsletter - Sign Up</h4>
                        <div className="email-sign-up">
                            <input className="email-input" type="email"/>
                            <button className="sign-up-btn">Sign Up</button>
                        </div>
                    </div>
                    <div>
                        <h4>Follow Us</h4>
                        <div className="icons">
                            <i className="fab fa-facebook-square fa-lg"/>
                            <i className="fab fa-twitter fa-lg"/>
                            <i className="fab fa-youtube fa-lg"/>
                            <i className="fab fa-instagram fa-lg"/>
                            <i className="fab fa-pinterest fa-lg"/>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default FooterArea