import { Link, Route, Routes } from 'react-router-dom'
import './App.css';
import Avaleht from './pages/Avaleht';
import VaataArvuteid from './pages/VaataArvuteid';
import LisaArvuti from './pages/LisaArvuti';
import Tooted from './pages/Tooted';

function App() {
  return (
    <div className="App">
      <br />
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/all">
        <button>Vaata sülearvuteid</button>
      </Link>
      <Link to="/add">
        <button>Lisa sülearvuti</button>
      </Link>
      <Link to="/products">
        <button>Vaata tooteid</button>
      </Link>
      <br /><br />
      <Routes>
        <Route path="" exact element={<Avaleht />} />
        <Route path="all" exact element={<VaataArvuteid />} />
        <Route path="add" exact element={<LisaArvuti />} />
        <Route path="products" exact element={<Tooted />} />
      </Routes>
    </div>
  );
}

export default App;
