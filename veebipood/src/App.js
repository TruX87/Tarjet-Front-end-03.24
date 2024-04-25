//import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/Esindused';
import Arikliendile from './pages/Arikliendile';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';
import NotFound from './pages/NotFound';
import Menyy from './components/Menyy';
import { useState } from 'react';
import Tooted from './pages/Tooted';
import Hinnad from './pages/Hinnad';
import Tootajad from './pages/Tootajad';
import HaldaHinnad from './pages/HaldaHinnad';
import HaldaEsindused from './pages/HaldaEsindused';
import HaldaTooted from './pages/HaldaTooted';
import HaldaTootajad from './pages/HaldaTootajad';

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("isDarkTheme") === "true" ? true : false);

  const toLightMode = () => {
    setDarkMode(false);
    localStorage.setItem("isDarkTheme", false);
  }

  const toDarkMode = () => {
    setDarkMode(true);
    localStorage.setItem("isDarkTheme", true);
  }

  return (
    <div className={darkMode === true? "App-dark" : "App"}>

     <Menyy /><br />

     {darkMode === true && <img className='mode-button' onClick={toLightMode} src="/light-mode.png" alt="" />}
     {darkMode === false && <img className='mode-button' onClick={toDarkMode} src="/dark-mode.png" alt="" />}

{/* kui ollakse localhost:3000/osta-kinkekaart lehel, siis näidatakse sisu (HTML) */}
      <Routes>
        <Route path="/" element={ <Navigate to="/avaleht"/> } />   {/* //lõpu teine variant */}
        <Route path="avaleht" element={ <Avaleht /> } />
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> } />
        <Route path="esindused" element={ <Esindused /> } />
        <Route path="arikliendile" element={ <Arikliendile /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="seaded" element={ <Seaded /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
        <Route path="tooted" element={ <Tooted/> } />
        <Route path="hinnad" element={ <Hinnad /> } />
        <Route path="tootajad" element={ <Tootajad /> } />
        <Route path="halda-tootajad" element={ <HaldaTootajad /> } />
        <Route path="halda-tooted" element={ <HaldaTooted /> } />
        <Route path="halda-esindused" element={ <HaldaEsindused /> } />
        <Route path="halda-hinnad" element={ <HaldaHinnad /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>

      {/* <p>Tere tulemast!</p>  */}
      {/* <div>Tere tulemast!</div>  */}

    </div>
  );
}

export default App;
