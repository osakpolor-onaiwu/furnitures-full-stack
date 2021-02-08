import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import SignUpAction from "../../redux/actions/signUpAction";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";

const SignUP = (props) => {
    const iniState = {
        username: "",
        email: "",
        password: "",
    };

    const [state, setState] = useState(iniState);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        props.SignUpAction(state);
        if (!props.isAuthenticated) {
            document.getElementById("message").innerHTML = props.error;
        }
    };

    if (props.isAuthenticated) {
        return <Redirect to="/login" />;
    }
    return (
        <main>
            <Navbar />
            <div className="authform">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        required={true}
                        type="text"
                        name="username"
                        onChange={handleChange}
                        placeholder="Enter your username"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        required={true}
                        type="email"
                        placeholder="Enter your Email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        required={true}
                        type="password"
                        minLength={7}
                        placeholder="password"
                        name="password"
                        onChange={handleChange}
                    />
                    <p id="message"></p>
                    <button type="submit">Submit</button>
                    <p>Already have an Account?</p>
                    <button type="button">
                        <Link className="butlink" to="/login">
                            Login
                        </Link>
                    </button>
                </form>
            </div>
            <Footer />
        </main>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.auth.authError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        SignUpAction: (newUser) => {
            dispatch(SignUpAction(newUser));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUP);
