import React from 'react'
// import productsFromFile from "../../data/products.json";
// import productsFromCart from "../../data/cart.json";
import { useState } from 'react';
import styles from "../../css/HomePage.module.css";
import CarouselGallery from '../../components/CarouselGallery';
import { useEffect } from 'react';
import {Button, Spinner} from "react-bootstrap";
import SortButtons from "../../components/Home/SortButtons"
import Products from '../../components/Home/Products';
import Card from '../../components/Card';
import FilterButtons from '../../components/Home/FilterButtons';


function HomePage() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;
  const categoriesUrl = process.env.REACT_APP_CATEGORIES_DB_URL;
  const[categoriesFromProducts, setCategoriesFromProducts] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => {
      setProducts(json)
      setDbProducts(json);
      setLoading(false);
      findCategoriesByProduct(json)
    });
  }, [url]);

  useEffect(() => {
    fetch(categoriesUrl)
    .then(res => res.json())
    .then(json => {
      setCategories(json)
    });
  }, [categoriesUrl]);

  

  const findCategoriesByProduct = (json) => {
    const result = [...new Set(json.map(product => product.category))];
    setCategoriesFromProducts(result);
  }

  // const sortAZ = () => {
  //   products.sort((a,b) => a.title.localeCompare(b.title));
  //   setProducts(products.slice());
  // }

  // const sortZA = () => {
  //   products.sort((a,b) => b.title.localeCompare(a.title));
  //   setProducts(products.slice());
  // }

  // const sortASC = () => {
  //   products.sort((a,b) => a.price - b.price);
  //   setProducts(products.slice());
  // }

  // const sortDESC = () => {
  //   products.sort((a,b) => b.price - a.price);
  //   setProducts(products.slice());
  // }

  // const filterMens = () => {
  //   const ansver = productsFromFile.filter(t => t.category.startsWith("men's"));
  //   setProducts(ansver);
  // }

  // const filterWomen = () => {
  //   const ansver = productsFromFile.filter(t => t.category.startsWith("women's"));
  //   setProducts(ansver);
  // }

  // const filterJewel = () => {
  //   const ansver = productsFromFile.filter(t => t.category.startsWith("jewel"));
  //   setProducts(ansver);
  // }

  // const filterElectronic = () => {
  //   const ansver = productsFromFile.filter(t => t.category.startsWith("electronic"));
  //   setProducts(ansver);
  // }
  // function filterByCategory(categoryClicked) {
  //   // reset();
  //   const result = dbProducts.filter((p) => p.category === categoryClicked);
  //   setProducts(result);
  // }


  // 1. võtame localStoragest          localStorage.getItem() || []
  // 2. võtame jutumärgid maha         JSON.parse()
  // 3. lisame võetule juurde          .push()
  // 4. paneme jutumärgid tagasi       JSON.stringify()
  // 5. paneme localStoragesse tagasi  localStorage.setItem()

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <CarouselGallery />
      <br />
      <Card headerText ={"Mens Casual Slim Fit"}
      contentText ={"The color could be slightly different between on the screen"}
      buttonText={"Look closer"}
       />
      <SortButtons 
      products={products} 
      setProducts={setProducts} />

      {/* {categories.map(category => 
      <Button key={category.name} variant="contained" onClick={() => filterByCategory(category.name)}>
        {category.name}
        </Button>
    )} */}
<br /><br />
<div className={styles.filter}>
  {categoriesFromProducts.map(category => 
        <FilterButtons key={category}
        dbProducts={dbProducts} 
        setProducts={setProducts}
        category={category} />
      )}</div>
      {/* <FilterButtons
      dbProducts={dbProducts} 
      setProducts={setProducts} /> */}

      {/* <Button variant="contained" onClick={() => filterByCategory("men's clothing")}>men's clothing</Button>{' '}
      <Button variant="contained" onClick={() => filterByCategory("women's clothing")}>women's clothing</Button>{' '}
      <Button variant="contained" onClick={() => filterByCategory("jewelery")}>jewelery</Button>{' '}
      <Button variant="contained" onClick={() => filterByCategory("electronics")}>electronics</Button>{' '} */}
      <br /><br />
      <div>Total Products: {products.length}</div><br />
      <div className={styles.products}>
        {products.map(product =>
          <Products key={product.id} product={product} />
        )}
    </div>
    </div>
  )
}

export default HomePage