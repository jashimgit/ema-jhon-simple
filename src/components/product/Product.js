import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props);
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">

            <div className="product-img">
                <img src={img} alt="" />
            </div>

            <div className="product-details">
                <h4 className="product-name">
                    <Link to={"/product/" + key}>{name}</Link>
                </h4>
                <p><small>{seller}</small></p>
                <p>{price}</p>
                <p>Only left in {stock} available - Order soon</p>
                {props.showAddToCart === true && <button
                    className="cart-button"
                    onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                </button>}
            </div>
        </div>
    );
}

export default Product;