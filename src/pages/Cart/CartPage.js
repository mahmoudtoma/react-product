import React from 'react'
import CartCheckOut from '../../components/Cart/CartCheckOut'
import CartItem from '../../components/Cart/CartItem'

const CartPage = () => {
    return (
        <div className='container my-4 '>
            <div className='row'>
                <h5>Shopping Cart</h5>
            </div>
            <div className='row my-3'>
                <div className='col-xs-12 col-md-9'>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className='col-xs-6 col-md-3'>
                    <CartCheckOut/>
                </div>
            </div>

        </div>
    )
}

export default CartPage