import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from '../layout/navbar';
import Footer from '../layout/footer'

export class Profile extends Component {
    state = {
        FirstName: "",
        LastName: "",
        PhoneNumber: null,
        Address: "",
        email:""
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
            email:this.props.user.email
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        const { user } = this.props;
        return (
            <main>
            <Navbar/>
            <div className='authform'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="FirstName">First Name</label>
                    <input
                        required={true}
                        type="text"
                        name="FirstName"
                        onChange={this.handleChange}
                        placeholder="First Name"
                    />
                    <label htmlFor="LastName">Last Name</label>
                    <input
                        required={true}
                        type="text"
                        placeholder="Last Name"
                        name="LastName"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        required={true}
                        type="tel"
                        placeholder="Phone Number"
                        name="PhoneNumber"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="Address">Address</label>
                    <input
                        required={true}
                        type="text"
                        placeholder="Address"
                        name="Address"
                        onChange={this.handleChange}
                    />
                     <button type='submit'>Save Profile</button>
                </form>
            </div>
            <Footer/>
            </main>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log(state.auth.user)
    return{
    user:state.auth.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
