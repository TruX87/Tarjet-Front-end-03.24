import React from 'react'
import productsFromFile from "../../data/products.json";
// import productsFromCart from "../../data/cart.json";
import { useState } from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
  const [products, setProducts] = useState(productsFromFile);
  

function addToCart(product) {
  const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
  cartLS.push(product);
  localStorage.setItem("cart", JSON.stringify(cartLS));
}
  // 1. võtame localStoragest          localStorage.getItem() || []
  // 2. võtame jutumärgid maha         JSON.parse()
  // 3. lisame võetule juurde          .push()
  // 4. paneme jutumärgid tagasi       JSON.stringify()
  // 5. paneme localStoragesse tagasi  localStorage.setItem()

  return (
    <div>
      {products.map(product =>
        <div key={product.id}>
          <img style={{width: "100px"}} src={product.image} alt="" /> 
          <div>{product.title}</div>
          <div>{product.price} €</div>
          <button onClick={() => addToCart(product)}>Add to cart</button>
          {/* <button onClick={"/product/" + product.title}>Look closer</button> */}
          <Link to={"/product/" + product.title}>Look closer</Link>
        </div>
      )}
    </div>
  )
}

export default HomePage