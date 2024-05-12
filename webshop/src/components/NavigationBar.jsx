import React from 'react'
import {Link} from 'react-router-dom';

function NavigationBar() {
  return (
    <div>
        <Link to="/">
        <button>Homepage</button>
      </Link>

      <Link to="/cart">
        <button>Cart</button>
      </Link>

      {/* <Link to="/shops">
        <button>Shops</button>
      </Link>

      <Link to="/contact">
        <button>Contact us</button>
      </Link> */}
    </div>
  )
}

export default NavigationBar