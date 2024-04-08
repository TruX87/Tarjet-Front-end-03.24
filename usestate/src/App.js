import './App.css';
import {Link, Navigate, Route, Routes} from 'react-router-dom'
import Ilmumine from './pages/Ilmumine';
import Kujundus from './pages/Kujundus';
import Muutmine from './pages/Muutmine';

function App() {
  return (
    <div className="App">
      
      <Link to="/ilmumine">Ilmumine</Link>
      <Link to="/kujundus">Kujundus</Link>
      <Link to="/muutmine">Muutmine</Link>
      
      <Routes>
        <Route path="/" element={<Navigate to="/ilmumine" />} />
        <Route path="/ilmumine" element={<Ilmumine />} />
        <Route path="/kujundus" element={<Kujundus />} />
        <Route path="/muutmine" element={<Muutmine />} />
      </Routes>
    </div>
  );
}

export default App;
