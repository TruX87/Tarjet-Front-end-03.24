import React from 'react'
import productsFromFile from "../../data/products.json";
// import productsFromCart from "../../data/cart.json";
import { useState } from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
  const [products, setProducts] = useState(productsFromFile);
  

function addToCart(product) {
  const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
  const found = cartLS.find(cp => cp.toode.id === product.id);
  // const index = cartLS.findIndex();
  if (found !== undefined) {  // index >= 0,   index !== -1
    // found.kogus++;   // found.kogus += 1;    
    // cartLS[index].kogus++;
    found.kogus = found.kogus +1;
  } else {
    cartLS.push({"kogus": 1, "toode": product});
  }
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
          <Link to={"/product/" + product.title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase()}>Look closer</Link>
        </div>
      )}
    </div>
  )
}

export default HomePage