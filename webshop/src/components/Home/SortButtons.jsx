import React from 'react'
import Button from '@mui/material/Button';

function Sort(props) {
    const sortAZ = () => {
      props.products.sort((a,b) => a.title.localeCompare(b.title));
      props.setProducts(props.products.slice());
      }
    
      const sortZA = () => {
        props.products.sort((a,b) => b.title.localeCompare(a.title));
        props.setProducts(props.products.slice());
      }
    
      const sortASC = () => {
        props.products.sort((a,b) => a.price - b.price);
        props.setProducts(props.products.slice());
      }
    
      const sortDESC = () => {
        props.products.sort((a,b) => b.price - a.price);
        props.setProducts(props.products.slice());
      }
      
  return (
    <div>
      <Button variant="outlined" onClick={sortAZ}>Sort A-Z</Button>{' '}
      <Button variant="outlined" onClick={sortZA}>Sort Z-A</Button>{' '}
      <Button variant="outlined" onClick={sortASC}>Sort Price asc</Button>{' '}
      <Button variant="outlined" onClick={sortDESC}>Sort Price desc</Button>{' '}
    </div>
  )
}

export default Sort