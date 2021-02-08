import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartList from './cartList'
import AddToCartAction from '../../redux/actions/cartAction'


export const CartDisplay = () => {
    return (
        <div>
            <CartList  />
        </div>
    )
}



export default CartDisplay
