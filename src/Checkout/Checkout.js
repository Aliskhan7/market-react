import React from 'react';
import cart-solid from "./shopping-cart-solid.svg";

function Checkout(props) {
    return (
        <div className='checkout'>
            <img src={cart-solid}/>
            <span className='counter'>0</span>
        </div>
    );
}

export default Checkout;