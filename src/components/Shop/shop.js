import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProduct] = useState(first10);
    const [cart,setCart] = useState([]);
    const handleAddProduct =(product)=>{
        console.log('Select',product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop-container' >
            <div className='product-container' >
            <h1>This is Shop</h1>
              
                    {
                        products.map(pd => <Product
                            handleAddProduct={handleAddProduct}
                             product={pd} > </Product>
                             )
                    }
                
            </div>
            <div className="cart-container">
            <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;