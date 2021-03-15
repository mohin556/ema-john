import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const product = (props) => {
    const {img,name,seller,price,stock} =props.product;
    return (
        <div className="product">
            <div>
              <img src={img} alt=""/>
            </div>
            <div>
            <h3 className='product-name'>{name} </h3>
            <br/>
            <p><small>by: {seller}</small></p>
            <p><small> price:$ {price}</small></p>
            <p><small>only {stock} avilable</small></p>
            <button className='button' onClick={()=>props.handleAddProduct(props.product)} > <FontAwesomeIcon icon={faShoppingCart} /> add to cart </button>
            </div>
           
        </div>
    );
};

export default product;