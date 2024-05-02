import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import LisaJook from './pages/LisaJook';
import HaldaJooke from './pages/HaldaJooke';
import Avaleht from './pages/Avaleht';
import Jook from './pages/Jook';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/lisa">
        <button>Lisa jook</button>
      </Link>

      <Link to="/halda">
        <button>Halda jooke</button>
      </Link>
      <br /><br />
      <Routes>
        <Route path="/" element={ <Avaleht/> }></Route>
        <Route path="/lisa" element={ <LisaJook /> }></Route>
        <Route path="/halda" element={ <HaldaJooke /> }></Route>
        <Route path="/jook/:number" element={ <Jook /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
