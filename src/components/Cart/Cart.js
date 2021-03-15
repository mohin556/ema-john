import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart =props.cart;

    let total = 0;
    for(let i= 0 ; i < cart.length ; i++ ){
       const product = cart[i];
       total= total + product.price;

    }
  let shipping =0;
     if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if (total>0){
        shipping = 12.99;
    }
    const tax = (total/10);
    return (
        <div className="cart">
            <h2> Order Summary </h2>
            <h3> Order Items:{cart.length} </h3>
            <p>Product Price:{total}</p>
            <p>Shipping Cost :{shipping}</p>
            <p><small>Vat:{tax} </small></p>
            <p>Total = {total+shipping+tax}</p>
        </div>
    );
};

export default Cart;