import React, { useState } from 'react'
// import productsFromCart from "../../data/cart.json";

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [message, setMessage] = useState("Your cart is empty");

  const empty = () => {
    cart.splice(0);
    setCart(cart.slice()); //muudab HTMLi
    localStorage.setItem("cart", JSON.stringify(cart)); //salvestab
}

const removeFromCart = (jrknr) => {
  cart.splice(jrknr, 1);  
  setCart(cart.slice()); 
  localStorage.setItem("cart", JSON.stringify(cart));
}

const addToEnd = (product) => {
  cart.push(product);
  setCart(cart.slice());
  localStorage.setItem("cart", JSON.stringify(cart)); 
}

const cartSum = () => {
  let total = 0;
  cart.forEach(t => total = total + t.price);
  return total;
}

  return (
    <div>
      <button onClick={empty}>Empty the cart</button>
      {cart.length > 0 ? (
        cart.map((product, index) =>
          <div key={index}>
            <img style={{ width: "100px" }} src={product.image} alt="" /> 
            <div>{product.title}</div>
            <div>{product.price}</div>
            <button onClick={() => removeFromCart(index)}>x</button>
            <button onClick={() => addToEnd(product)}>Add to the end</button>
          </div>
        )
      ) : (
        <div>{message}</div>
      )}
          <span>Number of items in the cart: </span> 
            {cart.length} 
            <span> pcs</span>
            <br />
            <div>Price total: {cartSum()} €</div>
    </div>
  );
}

export default Cart