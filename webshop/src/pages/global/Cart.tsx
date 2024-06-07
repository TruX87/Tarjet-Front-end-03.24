import React, { useContext, useState } from 'react'
// import productsFromCart from "../../data/cart.json";
import styles from "../../css/Cart.module.css"
import Button from '@mui/material/Button';
import ParcelMachines from '../../components/Cart/ParcelMachines';
import Payment from '../../components/Cart/Payment';
import { CartSumContext } from '../../store/CartSumContext';
import { useDispatch } from 'react-redux';
import { decrement as d, increment as i, incrementByAmount} from '../../store/counterSlice';
import { decrement, increment, decrementByAmount, zero } from '../../store/counterTotalSlice';

function Cart() {
  const [cart, setCart] = useState<any[]>(JSON.parse(localStorage.getItem("cart") || "[]"));
  const [message, setMessage] = useState("Your cart is empty");
  const {setCartSum} = useContext(CartSumContext);
  const dispatch = useDispatch();   // kui dispatch toimub, siis reduxi muutuja muutub
  

  const empty = () => {
    dispatch(zero());
    
    cart.splice(0);
    setCart(cart.slice()); //muudab HTMLi
    localStorage.setItem("cart", JSON.stringify(cart)); //salvestab
    setCartSum(cartSum()); //muudab navbaris kogusummat
}

const decreaseQuantity = (product: any) => {
  dispatch(decrement());

  product.kogus--;  //vähendab ühe võrra
  if (product.kogus === 0) {
    const index = cart.indexOf(product);
    cart.splice(index, 1);
  }
  setCart(cart.slice()); //muudab HTMLi
  localStorage.setItem("cart", JSON.stringify(cart)); //salvestab
  setCartSum(cartSum());
}

const increaseQuantity = (product: any) => {
  dispatch(increment());

  product.kogus++;  //suurendab ühe võrra
  setCart(cart.slice()); //muudab HTMLi
  localStorage.setItem("cart", JSON.stringify(cart)); //salvestab
  setCartSum(cartSum());
}

const removeFromCart = (jrknr: number) => {
  dispatch(incrementByAmount(cart[jrknr].kogus));
  dispatch(decrementByAmount(cart[jrknr].kogus));

  cart.splice(jrknr, 1);  
  setCart(cart.slice()); 
  localStorage.setItem("cart", JSON.stringify(cart));
  setCartSum(cartSum());
}

// const addToEnd = (product) => {
//   cart.push(product);
//   setCart(cart.slice());
//   localStorage.setItem("cart", JSON.stringify(cart)); 
// }

const cartSum = () => {
  let total = 0;
  cart.forEach(t => total = total + t.toode.price * t.kogus);
  return total.toFixed(2);  //fikseeritud 2 komakoha peale
}

const productsSum = () => {
  let total = 0;
  cart.forEach(t => total = total + t.kogus);
  return total; 
}

// const pay = () => {
//   const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
//   const paymentBody = {
//     "account_name": "EUR3D1",
//     "nonce": "165784" + new Date() + Math.random() * 95959878,
//     "timestamp": new Date(),
//     "amount": cartSum(),
//     "order_reference": Math.random() * 95959878,
//     "customer_url": "https://err.ee",
//     "api_username": "92ddcfab96e34a5f"
//   };
//   const paymentHeaders = {
//     "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
//     "Content-Type": "application/json"  
//   };

//   fetch(url, {method: "POST", body: JSON.stringify(paymentBody), headers: paymentHeaders})
//       .then(response => response.json())
//       .then(json => window.location.href = json.payment_link)
// }
// Kui HTMLs vahetame URLi: <Link to="">
  // Kui Reacti JavaScriptis vahetame URLi const navigate = useNavigate()    navigate("")
  // Kui tahame URLile liikuda mis on väljaspool meie rakendust     window.location.href = "http://err.ee"


  return (
    <div>
      <br />
      <Button variant="outlined" onClick={empty}>Empty the cart</Button><br /><br />
      {cart.length > 0 ? (
        cart.map((product, index) =>
          <div className={styles.product} key={index}>
            <img className={styles.image} src={product.toode.image} alt="" /> 
            <div className={styles.title}>{product.toode.title}</div>
            <div className={styles.price}>{product.toode.price.toFixed(2)} €</div>
            {/* <button onClick={() => decreaseQuantity(product)}>-</button> */}
            <div className={styles.quantity}>
              <img className={styles.button} onClick={() => decreaseQuantity(product) } src="/minus.png" alt="" />
              <div>{product.kogus} pcs</div>
              {/* <button onClick={() => increaseQuantity(product)}>+</button> */}
              <img className={styles.button} onClick={() => increaseQuantity(product) } src="/plus.png" alt="" />
            </div>
            <div className={styles.sum}>{(product.toode.price * product.kogus).toFixed(2)} €</div>
            {/* <button onClick={() => removeFromCart(index)}>x</button> */}
            <img className={styles.button} onClick={() => removeFromCart(index) } src="/delete.png" alt="" />
            {/* <button onClick={() => addToEnd(product)}>Add to the end</button> */}
          </div>
        )
      ) : (
        <div>{message}</div>
      )}

      {cart.length > 0 &&
        // <span className={styles.cart__bottom}>
        // <span className={styles.cartBottom}>
        // <span className={styles['cart-bottom']}>
      <span className={styles.cartBottom}>
          <span><u>Number of different items in the cart:</u> <b>{cart.length} pcs</b></span>
            <br />
            <div><u>Products total:</u> <b>{productsSum()} pcs</b></div>
            <div><u>Price total:</u> <b>{cartSum()} €</b></div>
            <Payment sum={cartSum()} />
            <ParcelMachines />
      </span>}
    </div>
  );
}

export default Cart