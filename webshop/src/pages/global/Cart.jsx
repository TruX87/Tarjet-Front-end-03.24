import React, { useState } from 'react'
import productsFromCart from "../../data/cart.json";

function Cart() {
  const [cart, setCart] = useState(productsFromCart);
  const [message, setMessage] = useState("Your cart is empty");

  const empty = () => {
    productsFromCart.splice(0);
    setCart(productsFromCart.slice());
    // muudaSonum("Ostukorv on tühi");
}

const removeFromCart = (jrknr) => {
  productsFromCart.splice(jrknr, 1);  
  setCart(productsFromCart.slice()); 
}

const addToEnd = (product) => {
  productsFromCart.push(product);
  setCart(productsFromCart.slice()); 
}

const cartSum = () => {
  let total = 0;
  cart.forEach(t => total = total + t.price);
  return total;
}

  return (
    <div>
      <button onClick={empty}>Empty the cart</button>
      <br />
      <span>Number of items in the cart: </span> 
            {cart.length} 
            <span> pcs</span>
            <br />
            <div>Price total: {cartSum()} €</div>
      {cart.length > 0 ? (
        cart.map(product =>
          <div key={product.id}>
            <img style={{ width: "100px" }} src={product.image} alt="" /> 
            <div>{product.title}</div>
            <div>{product.price}</div>
            <button onClick={() => removeFromCart(product)}>x</button>
            <button onClick={() => addToEnd(product)}>Add to the end</button>
          </div>
        )
      ) : (
        <div>{message}</div>
      )}
    </div>
  );
}

export default Cart