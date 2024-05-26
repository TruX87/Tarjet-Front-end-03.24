import React, { useEffect, useState, useRef } from 'react';

function AddProduct() {
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const idRef = useRef();

  const [products, setProducts] = useState([]);
  const [idUnique, setIdUnique] = useState(true);
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;

  const [categories, setCategories] = useState([]);
  const categoriesUrl = process.env.REACT_APP_CATEGORIES_DB_URL;

  useEffect(() => {
    fetch(categoriesUrl)
      .then(res => res.json())
      .then(json => setCategories(json));
  }, [categoriesUrl]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setProducts(json || []));
  }, [url]);

  const checkIdUniqueness = () => {
    const idValue = Number(idRef.current.value);
    const isUnique = !products.some(product => product.id === idValue);
    setIdUnique(isUnique);
  };

  const addProduct = async () => {
    if (!idUnique) {
      alert('The ID is not unique. Please use a different ID.');
      return;
    }

    const newProduct = {
      id: Number(idRef.current.value),
      title: titleRef.current.value,
      price: Number(priceRef.current.value),
      category: categoryRef.current.value,
      image: imageRef.current.value,
      rating: {
        rate: 0,
        count: 0,
      },
      active: true,
      description: descriptionRef.current.value,
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);

    fetch(url, {"method": "PUT", "body": JSON.stringify(products)});
    // await fetch(url, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(updatedProducts),
    // });

    idRef.current.value = '';
    titleRef.current.value = '';
    priceRef.current.value = '';
    imageRef.current.value = '';
    categoryRef.current.value = '';
    descriptionRef.current.value = '';
  };

  return (
    <div>
      {!idUnique && <div>Inserted ID is not unique</div>}
      <label>id</label><br />
      <input onChange={checkIdUniqueness} ref={idRef} type="text" /><br />
      <label>Product image</label><br />
      <input ref={imageRef} type="text" /><br />
      <label>Product title</label><br />
      <input ref={titleRef} type="text" /><br />
      <label>Product price</label><br />
      <input ref={priceRef} type="number" /><br />
      <label>Product category</label><br />
      <select ref={categoryRef}>
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
      </select><br />
      <label>Product description</label><br />
      <input ref={descriptionRef} type="text" /><br /><br />
      <button onClick={addProduct}>Add</button><br />
    </div>
  );
}

export default AddProduct;


// import React, { useEffect, useState } from 'react'
// import { useRef } from 'react';

// //add ID unique
// function AddProduct() {
//   const titleRef = useRef();
//   const priceRef = useRef();
//   const imageRef = useRef();
//   const categoryRef = useRef();
//   const descriptionRef = useRef();
//   const idRef = useRef();

  
//   const [products, setProducts] = useState([]);
//   const url = process.env.REACT_APP_PRODUCTS_DB_URL;

//   const [categories, setCategories] = useState([]);
//   const categoriesUrl = process.env.REACT_APP_CATEGORIES_DB_URL;

//   useEffect(() => {
//     fetch(categoriesUrl)
//     .then(res => res.json())
//     .then(json => {
//       setCategories(json)
//     });
//   }, [categoriesUrl]);

//   useEffect(() => {
//     fetch(url)
//     .then(res => res.json())
//     .then(json => setProducts(json || []));
//   }, [url]);

//   const addProduct = () => {
//     const newProduct = {
//       "id": Number(idRef.current.value),
//       "title": titleRef.current.value, 
//       "price": Number(priceRef.current.value), 
//       "category": categoryRef.current.value, 
//       "image": imageRef.current.value,
//       "rating": {
//         "rate": 0,
//         "count": 0
//       },
//       "active": true,
//       "description": descriptionRef.current.value,
//     };
//     products.push(newProduct);
//     fetch(url, {"method": "PUT", "body": JSON.stringify(products)});
    

//     idRef.current.value = "";
//     titleRef.current.value = "";
//     priceRef.current.value = "";
//     imageRef.current.value = "";
//     categoryRef.current.value = "";
//     descriptionRef.current.value = "";
//   }

//   return (
//     <div>
//       <label>id</label><br />
//       <input ref={idRef} type="text" /><br />
//       <label>Product image</label><br />
//       <input ref={imageRef} type="text" /><br />
//       <label>Product title</label><br />
//       <input ref={titleRef} type="text" /><br />
//       <label>Product price</label><br />
//       <input ref={priceRef} type="number" /><br />
//       <label>Product category</label><br />
//       <select ref={categoryRef}>
//         {categories.map(category => <option key={category.name}>{category.name}</option>)}
//       </select><br />
//       <label>Product description</label><br />
//       <input ref={descriptionRef} type="text" /><br /><br />
//       <button onClick={addProduct}>Add</button><br />
//     </div>
//   )
// }

// export default AddProduct