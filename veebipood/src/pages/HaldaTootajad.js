import React, { useRef, useState } from 'react'
import tootajadFailist from "../data/tootajad.json"
import { Link } from 'react-router-dom';

function HaldaTootajad() {
    const [tootaja, muudaTootaja] = useState(tootajadFailist.slice());
    const tootajaRef = useRef();
  
    const kustuta = (index) => {
      tootajadFailist.splice(index, 1);
      muudaTootaja(tootajadFailist.slice());
  
    }
    const lisa = (tootaja) => {
      tootajadFailist.push(tootaja);
      muudaTootaja(tootajadFailist.slice());
    }
  
    const lisaTootaja = () => {
      tootajadFailist.push(tootajaRef.current.value);
      muudaTootaja(tootajadFailist.slice());
    }

  return (
    <div>
      <label>Töötaja nimi</label><br />
      <input ref={tootajaRef} type="text" /><br />
      <button onClick={lisaTootaja}>Lisa</button><br />
      {tootaja.map((tootaja, index) => 
        <div key={index}>
              {tootaja}
              <button onClick={() => kustuta(index)}>x</button>
              <button onClick={() => lisa(tootaja)}>Lisa lõppu juurde</button>
              <Link to={"/muuda-tootaja/" + index}>
              <button>Muuda</button>
              </Link>
        </div>
    )}
    </div>
  )
}

export default HaldaTootajad