import React, { useContext } from 'react'
import './Cart.css' 

const Cart = () => {

    const {cartItems,dresses,removeFromCart} = useContext(StoreContext);

    return (
        <div className='cart'>
            <div className='cart-Items'>
                <div  className='cart-items-title'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
            </div>
        </div>
    )
}
