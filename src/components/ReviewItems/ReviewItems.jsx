import React from 'react';

const ReviewItems = (props) => {
    const {name, quantity} = props.product;
    const reviewStyle = {
        borderBottom: '1px solid gray',
        marginBottom: '8px',
        padding: '5px',
        width: '500px',
        marginLeft: '100px'
    }
    return (
        <div style={reviewStyle}>
            <h2 className="product-name">{name}</h2>
            <p>{quantity}</p>
            <button className="cart-button">Remove Item</button>
        </div>
    );
};

export default ReviewItems;