import React, {Component} from "react";
import "../../HMChairs.css";
import LoginForm from "./LoginForm";

class LoginPage extends Component {
    render() {
        return (
            <div className="single-chair-container">
                <div className="listCategory" style={{padding: "1% 0"}}>
                        <span>Home
                            <span style={{margin: "0 8px"}}>{">"}</span>
                            Sign In
                        </span>
                </div>
                <LoginForm/>
            </div>
        )
    }
}

export default LoginPage;