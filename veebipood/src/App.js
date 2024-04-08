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

function App() {
  return (
    <div className="App">

     <Menyy /> 

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
