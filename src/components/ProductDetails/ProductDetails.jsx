import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../product/Product';
import './ProductDetails.css';

const ProductDetails = () => {
    const {productKey} = useParams();
    const product = fakeData.find(product => product.key === productKey);
    console.log(product);
    return (
        <div>
            <h2>{productKey} product details page</h2>
            <Product 
                product={product} 
                showAddToCart={false}>

            </Product>
        </div>
    );
};

export default ProductDetails;


