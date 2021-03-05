import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from './../../fakeData/index';
import ReviewItems from './../ReviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cartProducts = productKey.map( key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[]);


    return (
        <div>
            <h2>Cart Items: {cart.length} </h2>
           {
               cart.map(pd =>  <ReviewItems product={pd}></ReviewItems>)
           }
        </div>
    );
};

export default Review;