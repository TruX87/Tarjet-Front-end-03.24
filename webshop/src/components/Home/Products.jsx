import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styles from "../../css/HomePage.module.css";
import Button from '@mui/material/Button';
import { CartSumContext } from '../../store/CartSumContext';
import { useDispatch } from 'react-redux';
// import { increment as counterIncrement } from '../../store/counterSlice';
import { increment } from '../../store/counterTotalSlice';

function Products({product, }) {
  const {cartSum, setCartSum} = useContext(CartSumContext);
  const dispatch = useDispatch();


    function addToCart(product) {
      // dispatch(counterIncrement());
      dispatch(increment())
      
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
        // setCartSum(cartSum + product.price);
        let total = 0;
        cartLS.forEach(t => total = total + t.toode.price * t.kogus);
        setCartSum(total.toFixed(2));
      }
      
  return (
    <div className={styles.product}>
          <img style={{width: "100px"}} src={product.image} alt="" /> 
          <div>{product.title.length > 50 ? product.title.substring(0,50) + "..." : product.title}</div>
          <div>{product.price.toFixed(2)} €</div>
          <Button variant="contained" onClick={() => addToCart(product)}>Add to cart</Button>
          {/* <button onClick={"/product/" + product.title}>Look closer</button> */}
          <Link to={"/product/" + product.title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase()}>
            <Button variant="outlined">Look closer</Button>
          </Link>
        </div>
  )
}

export default Products