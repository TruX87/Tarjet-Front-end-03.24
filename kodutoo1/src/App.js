import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import { useRef, useState } from 'react';
import Leht from './pages/Leht';
import Loader from './pages/Loader';
import {  ToastContainer, toast  } from 'react-toastify';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const KasutajaNimiRef = useRef();
  const ParoolRef = useRef();

  const logiSisse = () => {
    if (ParoolRef.currentvalue.length < 8) {
      toast.error("Parool on liiga lühike");
      return;
    }

    if (ParoolRef.current.valuetoLowerCase() === ParoolRef.current.value) {
      toast.error("Parool peab sisaldama suurt tähte");
      return;
    }

    if (ParoolRef.current.value.toUpperCase() === ParoolRef.current.value) {
      toast.error("Parool peab sisaldama väikest tähte");
      return;
    }

    if (ParoolRef.current.value.includes("%") === false) {
      toast.error("Parool peab sisaldama protsendi märki");
      return;
    }

    if (ParoolRef.current.value === "123") {
      muudaSisselogitud("jah");
      toast.success(KasutajaNimiRef.current.value + ", Oled sisselogitud");
      return;
    }

    toast.error("Vale parool");
  }

  const logiValja = () => {
    muudaSisselogitud("ei");
    toast.success("Oled edukalt väljalogitud");
  }

  return (
    <div className="App">
      <div>{sonum}</div>
      { sisselogitud === "ei" && <div>
        <label>Kasutajanimi</label><br />
        <input ref={KasutajaNimiRef} type="text" /><br />
        <label>Parool</label><br />
        <input ref={ParoolRef} type="password" /><br />
    </div>} 
<br />
      { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
      { sisselogitud === "jah" && <button onClick={logiValja}>Logi välja</button>}
<br /><br /><br />
      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="meist">
        <button>Meist</button>
      </Link>

      <Link to="kontakt">
        <button>Kontakt</button>
      </Link>

      <Link to="seaded">
        <button>Seaded</button>
      </Link>
      <Link to="leht">
        <button>Leht</button>
      </Link>
      <Link to="loader">
        <button>Loader</button>
      </Link>
      <br /><br />
      <Routes>
        <Route path="avaleht" element={ <Avaleht /> }></Route>
        <Route path="kontakt" element={ <Kontakt /> }></Route>
        <Route path="meist" element={ <Meist /> }></Route>
        <Route path="seaded" element={ <Seaded /> }></Route>
        <Route path="leht" element={ <Leht /> }></Route>
        <Route path="loader" element={ <Loader /> }></Route>
      </Routes>
<br /><br /><br /><br />
      <button className="nupp">Roheline nupp</button>
      <div className="text1">Sinine tekst</div>
      <div className="text2">Roheline tekst</div>
      <img className="pilt" src="https://www.saarevolley.ee/wp-content/uploads/2018/02/Netist-pilt-pallid-199x120x3.jpg" alt="pallid" />
      <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
    <iframe title="video" width="420" height="315"
    src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>
    
    <ToastContainer
          position="bottom-right"
          autoClose={3000}
          theme="dark"
          />
    </div>
  );
}

export default App;
