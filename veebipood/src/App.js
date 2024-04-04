//import logo from './logo.svg';
import './App.css';
import { Link, Navigate, Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/Esindused';
import Arikliendile from './pages/Arikliendile';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
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

{/* kui ollakse localhost:3000/osta-kinkekaart lehel, siis näidatakse sisu (HTML) */}
      <Routes>
        <Route path="" element={ <Navigate to="avaleht"/> }></Route>
        <Route path="avaleht" element={ <Avaleht /> }></Route>
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> }></Route>
        <Route path="esindused" element={ <Esindused /> }></Route>
        <Route path="arikliendile" element={ <Arikliendile /> }></Route>
        <Route path="ostukorv" element={ <Ostukorv /> }></Route>
        <Route path="seaded" element={ <Seaded /> }></Route>
        <Route path="lisa-toode" element={ <LisaToode /> }></Route>
        <Route path="*" element={ <NotFound /> }></Route>
      </Routes>

      {/* <p>Tere tulemast!</p>  */}
      {/* <div>Tere tulemast!</div>  */}

    </div>
  );
}

export default App;
