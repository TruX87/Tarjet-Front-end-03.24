import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../../css/MaintainProducts.module.css";

function AdminMaintainProduct({product, dbProducts, searchFromProducts, index}) {
  const url = process.env.REACT_APP_PRODUCTS_DB_URL;
  
    const deleteProduct = (product) => {
        const index = dbProducts.indexOf(product);
        dbProducts.splice(index, 1);
        // setProducts(productsFromFile.slice());
        fetch(url, {"method": "PUT", "body": JSON.stringify(dbProducts)});
        searchFromProducts();
    
      }

  return (
    
        <tr key={index} className={product.active ? styles.active : styles.inactive}> 
             <td><img className={styles.picture} src={product.image} alt="" /></td>
             <td>{product.title}</td> 
             <td>{product.price}</td> 
             <td>{product.category}</td>
             <td>{product.rating.rate}</td>
             <td>{product.rating.count}</td>
             <td>{product.description}</td>
             <td>
              <button onClick={() => deleteProduct(product)}>x</button>
              <Link to={"/admin/edit-product/" + product.id}>
                <button>Edit</button>
              </Link>
              </td>
              
            </tr>
  )
}

export default AdminMaintainProduct