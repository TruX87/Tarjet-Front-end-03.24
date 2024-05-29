import { Button } from '@mui/material';
import React from 'react'

function Payment(props) {
    const pay = () => {
        const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
        const paymentBody = {
          "account_name": "EUR3D1",
          "nonce": "165784" + new Date() + Math.random() * 95959878,
          "timestamp": new Date(),
          "amount": props.sum,
          "order_reference": Math.random() * 95959878,
          "customer_url": "https://err.ee",
          "api_username": "92ddcfab96e34a5f"
        };
        const paymentHeaders = {
          "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
          "Content-Type": "application/json"  
        };
      
        fetch(url, {method: "POST", body: JSON.stringify(paymentBody), headers: paymentHeaders})
            .then(response => response.json())
            .then(json => window.location.href = json.payment_link)
      }

  return (
    
        <Button variant="contained" onClick={pay}>Pay</Button>
    
  )
}

export default Payment