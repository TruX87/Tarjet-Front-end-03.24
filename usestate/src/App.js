import './App.css';
import {Link, Navigate, Route, Routes} from 'react-router-dom'
import Ilmumine from './pages/Ilmumine';
import Kujundus from './pages/Kujundus';
import Muutmine from './pages/Muutmine';
import Telefon from './pages/Telefon';
import Hind from './pages/Hind';

function App() {
  return (
    <div className="App">
      
      <Link to="/ilmumine">Ilmumine</Link>
      <Link to="/kujundus">Kujundus</Link>
      <Link to="/muutmine">Muutmine</Link>
      <Link to="/telefon">Telefon</Link>
      <Link to="/hind">Hind</Link>
      
      <Routes>
        <Route path="/" element={<Navigate to="/ilmumine" />} />
        <Route path="/ilmumine" element={<Ilmumine />} />
        <Route path="/kujundus" element={<Kujundus />} />
        <Route path="/muutmine" element={<Muutmine />} />
        <Route path="/telefon" element={<Telefon />} />
        <Route path="/hind" element={<Hind />} />
      </Routes>
    </div>
  );
}

export default App;
