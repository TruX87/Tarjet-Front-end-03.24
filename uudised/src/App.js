import './App.css';
import { Link, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div >
      <Link to="">
        <button className="nupp">Avalehele</button>
      </Link>
      
      <Link to="uudised">
        <button className="nupp">Uudiste lehele</button>
      </Link>

      <Link to="kontakt">
        <button className="nupp">Võta meiega ühendust</button>
      </Link>

      <Link to="meist">
        <button className="nupp">Info meist</button>
      </Link>

      <Routes>
        <Route path="" element={ <div>Avaleht, siin olev info on nähtav localhost:3000 aadressil</div> }></Route>
        <Route path="uudised" element={ <div>Uudised, siin olev info on nähtav localhost:3000/uudised aadressil</div> }></Route>
        <Route path="kontakt" element={ <div>Kontakt, siin olev info on nähtav localhost:3000/kontakt aadressil</div> }></Route>
        <Route path="meist" element={ <div>Meist, siin olev info on nähtav localhost:3000/meist aadressil</div> }></Route>
      </Routes>
    </div>
  );
}

export default App;
