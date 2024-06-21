import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Tegevused from './pages/Tegevused';

function App() {
  return (
    <div className='App'>
      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasisided</button>
      </Link>
      <Link to="/andjad">
        <button>Vaata, kes on tagasisidet andnud</button>
      </Link>
      <Link to="/tegevused">
        <button>Vaata, mis ülesandeid veel tegema pead</button>
      </Link>
      <Routes>
        <Route path="/" exact element={<div>Tere</div>} />
        <Route path="/tagasiside" exact element={<Tagasiside />} />
        <Route path="/andjad" exact element={<TagasisideAndjad />} />
        <Route path="/tegevused" exact element={<Tegevused />} />
      </Routes>
      
    </div>
  );
}

export default App;
