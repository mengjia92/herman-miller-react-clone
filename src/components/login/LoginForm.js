import React, {Component} from "react";
import {connect} from "react-redux";
import "../../HMChairs.css";
import { Field, reduxForm } from "redux-form";
import {actLogin} from "../../actions";

const loginValidation = values => {
    const errors = {};
    if (!values.email) {
        errors.email = "* Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address"
    }

    if (!values.password) {
        errors.password = "* Required"
    }

    return errors;
}

class LoginForm extends Component {

    onSubmit = (values) => {
        this.props.actLogin(values);
    }

    fieldInput(field) {
        return (
            <div>
                <label style={{fontWeight: "bold"}}>{field.label}</label>
                <div>
                    {field.meta.error && field.meta.touched &&
                    <div {...field.meta.error} className="validation-error">{field.meta.error}</div>}
                    <input {...field.input} type={field.type} className="text-box"/>
                </div>
            </div>
        )
    }

    render() {
        const {handleSubmit, submitting} = this.props

        return (
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
                    <div className="login-box">
                       <div className="login-title">
                           <div style={{marginBottom: "10px"}}>Account</div>
                       </div>
                        <div style={{margin: "20px 0"}}>
                            <Field type="text" placeholder="Username" name="email" label="Email" component={this.fieldInput}/>
                        </div>
                        <div style={{margin: "20px 0"}}>
                            <Field type="password" placeholder="Password" name="password" label="Password" component={this.fieldInput}/>
                        </div>
                        <button className="sign-in-btn" type="submit" disabled={submitting}>Sign In</button>
                    </div>
                </form>

            </div>
        )
    }
}

const filledForm = reduxForm({
    form: "loginForm",
    validate: loginValidation,
    initialValues: {
        email: "markxu@mark2win.com",
        password: "Mark2win"
    }
})(LoginForm)

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps, {actLogin})(filledForm)