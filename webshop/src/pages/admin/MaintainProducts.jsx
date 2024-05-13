import React from 'react'
import productsFromFile from "../../data/products.json";
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile.slice());
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const ratingRef = useRef();

  const deleteProduct = (product) => {
    productsFromFile.splice(product, 1);
    setProducts(productsFromFile.slice());

  }

  const addProduct = () => {
    const newProduct = {
      "title": titleRef.current.value, 
      "price": Number(priceRef.current.value), 
      "category": categoryRef.current.value, 
      "image": imageRef.current.value,
      "rating": Number(ratingRef.current.value),
      "description": descriptionRef.current.value,
    };
    productsFromFile.push(newProduct);
    setProducts(productsFromFile.slice());

    titleRef.current.value = "";
    priceRef.current.value = "";
    imageRef.current.value = "";
    categoryRef.current.value = "";
    ratingRef.current.value = "";
    descriptionRef.current.value = "";
  }


  return (
    <div>
      <label>Product image</label><br />
      <input ref={imageRef} type="text" /><br />
      <label>Product title</label><br />
      <input ref={titleRef} type="text" /><br />
      <label>Product price</label><br />
      <input ref={priceRef} type="number" /><br />
      <label>Product category</label><br />
      <input ref={categoryRef} type="text" /><br />
      <label>Product rating</label><br />
      {/* <input ref={ratingRef} type="number" /><br /> */}
      <input 
        ref={ratingRef} 
        type="number" 
        min="0" 
        max="5"  
      /><br />
      <label>Product description</label><br />
      <input ref={descriptionRef} type="text" /><br />
      <button onClick={addProduct}>Add</button><br />

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Rate count</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => 
             <tr key={index}> 
             <td><img style={{width: "100px"}} src={product.image} alt="" /></td>
             <td>{product.title}</td> 
             <td>{product.price}</td> 
             <td>{product.category}</td>
             <td>{product.rating.rate}</td>
             <td>{product.rating.count}</td>
             <td>{product.description}</td>
             <td>
              <button onClick={() => deleteProduct(index)}>x</button>
              <Link to={"/edit-product/" + index}>
              <button>Edit</button>
              </Link>
              </td>
              
            </tr>
    )}
        </tbody>
      </table>
      
    </div>
  )
}

export default MaintainProducts