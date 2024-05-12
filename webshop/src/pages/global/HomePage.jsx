import React from 'react'
import productsFromFile from "../../data/products.json";
import productsFromCart from "../../data/cart.json";
import { useState } from 'react';

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

function addToCart(product) {
  productsFromCart.push(product);
}

// const lisaOstukorvi = (toode) => {
//   productsFromFile.push(toode);
// }

  return (
    <div>
      {products.map(product =>
        <div key={product.id}>
          <img style={{width: "100px"}} src={product.image} alt="" /> 
          <div>{product.title}</div>
          <div>{product.price}</div>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      )}
    </div>
  )
}

export default HomePage