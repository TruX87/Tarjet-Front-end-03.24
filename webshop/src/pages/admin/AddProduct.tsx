import React, { useEffect, useState, useRef } from 'react';
import { Catecory } from '../../models/Category';
import { Product } from '../../models/Product';

function AddProduct() {
  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [idUnique, setIdUnique] = useState(true);
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;

  const [categories, setCategories] = useState<Catecory[]>([]);
  const categoriesUrl = process.env.REACT_APP_CATEGORIES_DB_URL;

  useEffect(() => {
    if (categoriesUrl === undefined) {
        return;
    }
    fetch(categoriesUrl)
      .then(res => res.json())
      .then(json => setCategories(json));
  }, [categoriesUrl]);

  useEffect(() => {
    if (url === undefined) {
      return;
    }
    fetch(url)
      .then(res => res.json())
      .then(json => setProducts(json || []));
  }, [url]);

  const checkIdUniqueness = () => {
    const idInput = idRef.current;
    if (idInput === null) {
      return;
    }
    const result = products.find((p) => p.id === Number(idInput.value));
    // const isUnique = !products.some(product => product.id === idInput.value);
    setIdUnique(result === undefined);
  };

  const addProduct = async () => {
    if (
      idRef.current === null 
    || titleRef.current === null 
    || priceRef.current === null 
    || categoryRef.current === null 
    || imageRef.current === null 
    || descriptionRef.current === null
  ) {
    return;

  }
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
    if (url === undefined) {
      return;
    }

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