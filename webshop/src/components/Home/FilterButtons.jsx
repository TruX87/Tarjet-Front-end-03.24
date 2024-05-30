import React from 'react'
import Button from '@mui/material/Button';


function FilterButtons({dbProducts, setProducts, category, categories}) {
  function filterByCategory(categoryClicked) {
    // reset();
    const result = dbProducts.filter((p) => p.category === categoryClicked);
    setProducts(result);
  }
  return (
    <div>
    <Button key={category} variant="contained" onClick={() => filterByCategory(category)}>
        {category}
        </Button>
    </div>
  )
}

export default FilterButtons