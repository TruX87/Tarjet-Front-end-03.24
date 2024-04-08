import React from 'react';
import {Link} from 'react-router-dom';

function Menyy() {
  return (
    <div>
        {/* img peale vajutades läheb: localhost3000/avaleht */}
      <Link to="avaleht">
        <img className="Header-logo" src="https://maitar.ee/wp-content/uploads/2024/02/maitar-logo-animation.gif" alt="Logo" />
      </Link>
      
      <Link to="osta-kinkekaart">
        <button className="nupp1">Kinkekaart</button>
      </Link>

      <Link to="esindused">
        <button className="nupp1">Esindused</button>
      </Link>

      <Link to="arikliendile">
        <button className="nupp1">Ärikliendile</button>
      </Link>

      <Link to="ostukorv">
        <button className="nupp1">Ostukorv</button>
      </Link>

      <Link to="seaded">
        <button className="nupp1">Seaded</button>
      </Link>

      <Link to="lisa-toode">
        <button className="nupp1">Lisa toode</button>
      </Link>
    </div>
  )
}

export default Menyy