import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import productsFromFile from "../../data/products.json"
import NotFound from '../global/NotFound';

function EditProduct() {
  const {productId} = useParams();  //URLst võetakse ainult sõnu --> "353515"
  
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const ratingRef = useRef();
  const idRef = useRef();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;
  const found = products.find(product => product.id === Number(productId));

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setProducts(json || []));
  }, [url]);

  const editProduct = () => {
    const newProduct = {
      "id": Number(idRef.current.value),
      "title": titleRef.current.value, 
      "price": Number(priceRef.current.value), 
      "category": categoryRef.current.value, 
      "image": imageRef.current.value,
      "rating": Number(ratingRef.current.value),
      "description": descriptionRef.current.value,
    };
    const index = products.indexOf(found);
    // productsFromFile.push(newProduct);
    products[index] = newProduct;
    fetch(url, {"method": "PUT", "body": JSON.stringify(products)});
    navigate("/admin/maintain-products");
  }

  if (found === undefined) {
    return <NotFound />
  }

  return (
    <div>
      <label>id</label><br />
      <input ref={idRef} type="text" defaultValue={found.id}/><br />
      <label>Product image</label><br />
      <input ref={imageRef} type="text" defaultValue={found.image}/><br />
      <label>Product title</label><br />
      <input ref={titleRef} type="text" defaultValue={found.title}/><br />
      <label>Product price</label><br />
      <input ref={priceRef} type="number" defaultValue={found.price}/><br />
      <label>Product category</label><br />
      <input ref={categoryRef} type="text" defaultValue={found.category}/><br />
      <label>Product rating</label><br />
      {/* <input ref={ratingRef} type="number" /><br /> */}
      <input 
        ref={ratingRef} 
        type="number" 
        min="0" 
        max="5"  
      /><br />
      <label>Product description</label><br />
      <input ref={descriptionRef} type="text" defaultValue={found.description}/><br />
      <button onClick={editProduct}>Edit</button><br />
    </div>
  )
}

export default EditProduct