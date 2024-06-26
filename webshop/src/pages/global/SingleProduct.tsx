import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import productsFromFile from "../../data/products.json";
import NotFound from './NotFound';
import { Spinner } from 'react-bootstrap';
import { Product } from '../../models/Product';

function SingleProduct() {
    const {title} = useParams();
  //   const products = products.find(t => t.title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase() === title
  // );
  const [products, setProducts] = useState<Product[]>([]);
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;
  const [isLoading, setLoading] = useState(true);
  const found = products.find(t => t.title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase() === title
  );
    
  useEffect(() => {
    if (url === undefined) {
      return;
    }
    fetch(url)
    .then(res => res.json())
    .then(json => {
      setProducts(json || []);
      setLoading(false);
    });
  }, [url]);

  if (isLoading) {
    return <Spinner />
  }

    if (found === undefined) {
      return <NotFound />
    }
    // const index = products.indexOf(found);
    // fetch(url, {"method": "PUT", "body": JSON.stringify(products)});


  return (
    <div>
        <img style={{width: "100px"}} src={found.image} alt="" />
        <div>Product title: {found.title}</div>
        <div>Price: {found.price} €</div>
        <div>Rating: {found.rating.rate} €</div>
        <div>Category: {found.category}</div>
        <div>Description: {found.description}</div>
    </div>
  )
}

export default SingleProduct