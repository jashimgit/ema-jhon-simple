import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">

            <div className="product-img">
                <img src={img} alt="" />
            </div>

            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <p><small>{seller}</small></p>
                <p>{price}</p>
                <p>Only left in {stock} available - Order soon</p>
                <button className="cart-button" onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                </button>
            </div>
        </div>
    );
}

export default Product;