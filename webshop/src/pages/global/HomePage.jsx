import React from 'react'
// import productsFromFile from "../../data/products.json";
// import productsFromCart from "../../data/cart.json";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "../../css/HomePage.module.css";
import Button from '@mui/material/Button';
import CarouselGallery from '../../components/CarouselGallery';
import { useEffect } from 'react';
import {Spinner} from "react-bootstrap";


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
      const result = [...new Set(json.map(product => product.category))];
      setCategoriesFromProducts(result);
    });
  }, [url]);

  useEffect(() => {
    fetch(categoriesUrl)
    .then(res => res.json())
    .then(json => {
      setCategories(json)
    });
  }, [categoriesUrl]);


  const sortAZ = () => {
    products.sort((a,b) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a,b) => b.title.localeCompare(a.title));
    setProducts(products.slice());
  }

  const sortASC = () => {
    products.sort((a,b) => a.price - b.price);
    setProducts(products.slice());
  }

  const sortDESC = () => {
    products.sort((a,b) => b.price - a.price);
    setProducts(products.slice());
  }

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
  function filterByCategory(categoryClicked) {
    // reset();
    const result = dbProducts.filter((p) => p.category === categoryClicked);
    setProducts(result);
  }

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

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <CarouselGallery />
      <br />
      <Button variant="outlined" onClick={sortAZ}>Sort A-Z</Button>{' '}
      <Button variant="outlined" onClick={sortZA}>Sort Z-A</Button>{' '}
      <Button variant="outlined" onClick={sortASC}>Sort Price asc</Button>{' '}
      <Button variant="outlined" onClick={sortDESC}>Sort Price desc</Button>{' '}
<br /><br />
    {categories.map(category => 
      <Button key={category.name} variant="contained" onClick={() => filterByCategory(category.name)}>
        {category.name}
        </Button>
    )}

    <br /><br />
    {categoriesFromProducts.map(category => 
      <Button key={category} variant="contained" onClick={() => filterByCategory(category)}>
        {category}
        </Button>
    )}

      {/* <Button variant="contained" onClick={() => filterByCategory("men's clothing")}>men's clothing</Button>{' '}
      <Button variant="contained" onClick={() => filterByCategory("women's clothing")}>women's clothing</Button>{' '}
      <Button variant="contained" onClick={() => filterByCategory("jewelery")}>jewelery</Button>{' '}
      <Button variant="contained" onClick={() => filterByCategory("electronics")}>electronics</Button>{' '} */}
      <br /><br />
      <div>Total Products: {products.length}</div><br />
      <div className={styles.products}>
      {products.map(product =>
        <div className={styles.product} key={product.id}>
          <img style={{width: "100px"}} src={product.image} alt="" /> 
          <div>{product.title.length > 50 ? product.title.substring(0,50) + "..." : product.title}</div>
          <div>{product.price.toFixed(2)} €</div>
          <Button variant="contained" onClick={() => addToCart(product)}>Add to cart</Button>
          {/* <button onClick={"/product/" + product.title}>Look closer</button> */}
          <Link to={"/product/" + product.title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase()}>
            <Button variant="outlined">Look closer</Button>
          </Link>
        </div>
      )}
    </div>
    </div>
  )
}

export default HomePage