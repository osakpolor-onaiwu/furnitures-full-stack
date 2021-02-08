import React, { Component, useState } from "react";
import { connect } from "react-redux";
import {NavLink,Redirect} from 'react-router-dom'
import UpdateCartReduce from "../../redux/actions/updateCartReduce";
import GetCart from '../../redux/actions/getCart'
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import UpdateCartAdd from "../../redux/actions/updateCartAdd";
import loadUser from "../../redux/actions/userAction";
import DeleteCartItem from '../../redux/actions/cartItemDel'
import { Delete } from "react-feather";

const CartList = ({ cart, UpdateCartAdd, UpdateCartReduce, user,isAuthenticated,GetCart,DeleteCartItem }) => {
    const iniState={
        refresh:true
    }
    const [state,setState]=useState(iniState)
    
    const increment = (cartItem) => {
        UpdateCartAdd(cartItem.id,{
            id:cartItem.id,
            name: cartItem.name,
            price: cartItem.price,
            unit: cartItem.unit+1,
            image: cartItem.image,
            owner: user.id,
        });
        GetCart()
    };

    const decrement = (cartItem) => {
        if (cartItem.unit > 0) {
            UpdateCartReduce(cartItem.id,{
                id:cartItem.id,
                name: cartItem.name,
                price: cartItem.price ,
                unit: cartItem.unit-1,
                image: cartItem.image,
                owner: user.id,
            })
        }
        if(cartItem.unit===0){
            DeleteCartItem(cartItem.id)
        }
        GetCart()
    };

    const CartItems =()=>{
        if(isAuthenticated==true){
           const item= cart.length ? (
        
                cart.map((cartItem) => {
                    return (
                        <div id="cartDescription" key={cartItem.id}>
                            <img src={cartItem.image} alt="cartItempic" />
                            <div className="itemDescription">
                                <h4>{cartItem.name}</h4>
                                <h5>Price: {cartItem.price*cartItem.unit} Naira</h5>
                                <span>Units:{cartItem.unit}</span>
                                <button
                                    onClick={() => increment(cartItem)}
                                    type="submit">
                                    +
                                </button>
                                <button
                                    onClick={() => decrement(cartItem)}
                                    type="submit">
                                    -
                                </button>
                                <div>
                                    <NavLink to="/order">
                                        <button id='order'>Complete your order</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>You have No Item in Your Cart</div>
            );
            return item
        }
    }
    return (
        <main>
            <Navbar />
            <section id="Cart">{CartItems()}</section>
            <Footer />
        </main>
    );
};

const mapStateToProps = (state) => {
    console.log(state.cart.cart);
    let id=state.auth.user.id
    return {
        cart: state.cart.cart.filter(cartItem=>{
            return cartItem.owner==id
        }),
        user: state.auth.user,
        isAuthenticated:state.auth.isAuthenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        UpdateCartAdd: (id,payload) => {
            dispatch(UpdateCartAdd(id,payload));
        },
        UpdateCartReduce: (id,payload) => {
            dispatch(UpdateCartReduce(id,payload));
        },
        loadUser: () => {
            dispatch(loadUser());
        },
        GetCart:()=>{dispatch(GetCart())},
        DeleteCartItem:(id)=>{dispatch(DeleteCartItem(id))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
