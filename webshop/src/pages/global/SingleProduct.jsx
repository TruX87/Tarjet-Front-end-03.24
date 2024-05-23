import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import productsFromFile from "../../data/products.json";
import NotFound from './NotFound';

function SingleProduct() {
    const {title} = useParams();
  //   const products = products.find(t => t.title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase() === title
  // );
  const [products, setProducts] = useState([]);
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;
  const found = products.find(product => product.title === title);
    
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setProducts(json || []));
  }, [url]);

    if (products === undefined) {
      return <NotFound />
    }
    const index = products.indexOf(found);
    fetch(url, {"method": "PUT", "body": JSON.stringify(products)});


  return (
    <div>
        <img style={{width: "100px"}} src={products.image} alt="" />
        <div>Product title: {products.title}</div>
        <div>Price: {products.price} €</div>
        <div>Rating: {products.rating} €</div>
        <div>Category: {products.category} €</div>
        <div>Description: {products.description}</div>
    </div>
  )
}

export default SingleProduct