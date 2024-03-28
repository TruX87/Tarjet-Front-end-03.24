//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/Esindused';
import Arikliendile from './pages/Arikliendile';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';

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

{/* kui ollakse localhost:3000/osta-kinkekaart lehel, siis näidatakse sisu (HTML) */}
      <Routes>
        <Route path="avaleht" element={ <Avaleht /> }></Route>
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> }></Route>
        <Route path="esindused" element={ <Esindused /> }></Route>
        <Route path="arikliendile" element={ <Arikliendile /> }></Route>
        <Route path="ostukorv" element={ <Ostukorv /> }></Route>
        <Route path="seaded" element={ <Seaded /> }></Route>

      </Routes>

      {/* <p>Tere tulemast!</p>  */}
      {/* <div>Tere tulemast!</div>  */}

    </div>
  );
}

export default App;
