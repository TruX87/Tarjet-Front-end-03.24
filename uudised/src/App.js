import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import LisaUudis from './pages/LisaUudis';
import KasutajaPostitus from './pages/KasutajaPostitus';
import YksPostitus from './pages/YksPostitus';

function App() {
  return (
    <div >
      <Link to="">
        <button>Avalehele</button>
      </Link>
      
      <Link to="uudised">
        <button>Uudiste lehele</button>
      </Link>

      <Link to="kontakt">
        <button>Võta meiega ühendust</button>
      </Link>

      <Link to="meist">
        <button>Info meist</button>
      </Link>

      <Link to="lisa-uudis">
        <button>Lisa uudis</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> }></Route>
        <Route path="uudised" element={ <Uudised /> }></Route>
        <Route path="kontakt" element={ <Kontakt /> }></Route>
        <Route path="meist" element={ <Meist /> }></Route>
        <Route path="lisa-uudis" element={ <LisaUudis /> }></Route>
        <Route path="kasutaja-postitus/:kasutajaId" element={ <KasutajaPostitus /> }></Route>
        <Route path="vaata-postitus/:postituseId" element={ <YksPostitus /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
