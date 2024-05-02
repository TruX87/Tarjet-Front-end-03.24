import React, { useRef, useState } from 'react'
import TalEsindusedFailist from "../data/Talesindused.json"
import { Link } from 'react-router-dom';

function HaldaEsindused() {
  const [esindus, muudaEsindus] = useState(TalEsindusedFailist.slice());
  const esindusRef = useRef();

  const kustuta = (index) => {
    TalEsindusedFailist.splice(index, 1);
    muudaEsindus(TalEsindusedFailist.slice());

  }
  const lisa = (esindus) => {
    TalEsindusedFailist.push(esindus);
    muudaEsindus(TalEsindusedFailist.slice());
  }

  const lisaEsindus = () => {
    TalEsindusedFailist.push(esindusRef.current.value);
    muudaEsindus(TalEsindusedFailist.slice());
  }
  return (
    <div>
      <label>Esinduse nimi</label><br />
      <input ref={esindusRef} type="text" /><br />
      <button onClick={lisaEsindus}>Lisa</button><br />
      {esindus.map((esindus, index) => 
        <div key={index}>
              {esindus}
              <button onClick={() => kustuta(index)}>x</button>
              <button onClick={() => lisa(esindus)}>Lisa lõppu juurde</button>
              <Link to={"/muuda-esindus/" + index}>
              <button>Muuda</button>
              </Link>
        </div>
    )}
    </div>
  )
}

export default HaldaEsindused