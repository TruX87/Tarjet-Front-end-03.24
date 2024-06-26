import React, { useRef, useState } from 'react'
import tootajadFailist from "../data/tootajad.json"
import { Link } from 'react-router-dom';

function HaldaTootajad() {
    const [tootajad, muudaTootajad] = useState(tootajadFailist.slice());
    const tootajaRef = useRef();
    
  
    const kustuta = (index) => {
      tootajadFailist.splice(index, 1);
      muudaTootajad(tootajadFailist.slice());
  
    }
    const lisa = (tootaja) => {
      tootajadFailist.push(tootaja);
      muudaTootajad(tootajadFailist.slice());
    }
    
  
    const lisaTootaja = () => {
      tootajadFailist.push(tootajaRef.current.value);
      muudaTootajad(tootajadFailist.slice());
    }

    const reset = () => {
      muudaTootajad(["Urmet","Kaido","Liina","Maiki","Heidi","Epp","Kaire","Anet","Maarja"]);
  }

  return (
    <div>
      <label>Töötaja nimi</label><br />
      <input ref={tootajaRef} type="text" /><br />
      <button onClick={lisaTootaja}>Lisa</button><br />
      <button className='nuppReset' onClick={reset}>Taasta algasetus</button>
      {tootajad.map((tootaja, index) => 
        <div key={index}>
              {tootaja}
              <button onClick={() => kustuta(index)}>x</button>
              <button onClick={() => lisa(tootaja)}>Lisa lõppu juurde</button>
              <Link to={"/muuda-tootaja/" + index}>
              <button>Muuda</button>
              </Link>
              <Link to={"/tootaja/" + index}>
              Vaata lähemalt
              </Link>
        </div>
    )}
    </div>
  )
}

export default HaldaTootajad