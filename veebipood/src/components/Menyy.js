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
      <Link to="tooted">
        <button className="nupp1">Tooted</button>
      </Link>
      <Link to="hinnad">
        <button className="nupp1">Hinnad</button>
      </Link>
      <Link to="tootajad">
        <button className="nupp1">Töötajad</button>
      </Link>
      <br /><br />
      <Link to="/halda-esindused">
        <button className="nupp1">Halda esindusi</button>
      </Link>
      <Link to="/halda-hinnad">
        <button className="nupp1">Halda hindu</button>
      </Link>
      <Link to="/halda-tootajad">
        <button className="nupp1">Halda töötajaid</button>
      </Link>
      <Link to="/halda-tooted">
        <button className="nupp1">Halda tooteid</button>
      </Link>
    </div>
  )
}

export default Menyy