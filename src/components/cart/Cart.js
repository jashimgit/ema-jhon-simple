import React from 'react';
import './cart.css';


const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let value = cart[i];
        total = total + value.price
    }
    // count tax 
    let tax = (total / 10);

    //  grand total 
    let grandTotal = (total + tax)

    const formatPrice = (num) => {
        let formatedPrice = Math.floor(num);
        return formatedPrice;
    }
    // shiping 
    let shipping = 0;
    if (shipping > 35) {
        shipping = 0
    } else if (shipping > 15) {
        shipping = 4.99
    }

    return (
        <div>
            <h3>Order Summery</h3>
            <h5>Items ordered : {cart.length}</h5>
            <h4>Product Price : $ {formatPrice(total)}</h4>
            <h4>Tax : $ {formatPrice(tax)}</h4>
            <h4>Shipping Cost: $ {formatPrice(shipping)}</h4>
            <h4>Grand Total : $ {formatPrice(grandTotal)}</h4>
        </div>
    );
}

export default Cart;