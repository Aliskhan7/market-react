import React from 'react';
import cartSolid from "./shopping-cart-solid.svg";

function Checkout(props) {

    const cartBase = props.base.filter((product) => {
        if(product.bought === true) {
            return true
        }
        return false
    });

    return (
        <div className='checkout'>
            <img src={cartSolid}/>
            <span className='counter'>
                {cartBase.length}
            </span>
        </div>
    );
}

export default Checkout;