import { React, useState } from "react";
import './shop.css';
import fakeData from '../../fakeData';
import Product from '../product/Product';
import Cart from '../cart/Cart';
import { addToDatabaseCart } from "../../utilities/databaseManager";


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
   
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;

        addToDatabaseCart(product.key, count)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => 
                    <Product
                        product={pd} 
                        key={pd.key}
                        showAddToCart={true} 
                        handleAddProduct={handleAddProduct} ></Product>)
                }


            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
}

export default Shop;