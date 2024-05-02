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

  const reset = () => {
    muudaEsindus(["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);
}

  return (
    <div>
      <label>Esinduse nimi</label><br />
      <input ref={esindusRef} type="text" /><br />
      <button onClick={lisaEsindus}>Lisa</button><br />
      <button className='nuppReset' onClick={reset}>Taasta algasetus</button>
      {esindus.map((esindus, index) => 
        <div key={index}>
              {esindus}
              <button onClick={() => kustuta(index)}>x</button>
              <button onClick={() => lisa(esindus)}>Lisa lõppu juurde</button>
              <Link to={"/muuda-esindus/" + index}>
              <button>Muuda</button>
              </Link>
              <Link to={"/esindus/" + index}>
              Vaata lähemalt
              </Link>
        </div>
    )}
    </div>
  )
}

export default HaldaEsindused