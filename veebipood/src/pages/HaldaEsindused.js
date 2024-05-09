import React, { useRef, useState } from 'react'
import TalEsindusedFailist from "../data/Talesindused.json"
import { Link } from 'react-router-dom';

function HaldaEsindused() {
  const [esindus, muudaEsindus] = useState(TalEsindusedFailist.slice());
  const esindusRef = useRef();
  const keskusRef = useRef();
  const telRef = useRef();
  const aadressRef = useRef();

  // kui järjekorranumber ei muutu, võin kasutada järjekorranumbreid
//      kustutamiseks ja muutma minemiseks

// järjekorranumber muutub kui: sorteerime, filtreerime

// siis ei saa järjekorranumbrit kustutamiseks kasutada ja pean objekti
//    sulgude seest saatma, et ise järjekorranumber üles otsida

  const kustuta = (index) => {
    TalEsindusedFailist.splice(index, 1);
    muudaEsindus(TalEsindusedFailist.slice());

  }
  const lisa = (esindus) => {
    TalEsindusedFailist.push(esindus);
    muudaEsindus(TalEsindusedFailist.slice());
  }

  const lisaEsindus = () => {
    const uusEsindus = {
      "keskus": keskusRef.current.value, 
      "tel": Number(telRef.current.value), 
      "aadress": aadressRef.current.checked, 
    };
    TalEsindusedFailist.push(uusEsindus);
    muudaEsindus(TalEsindusedFailist.slice());

    keskusRef.current.value = "";
    telRef.current.value = "";
    aadressRef.current.value = "";
  }

  const reset = () => {
    muudaEsindus(["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);
}

  return (
    <div>
      <label>Esinduse nimi</label><br />
      <input ref={keskusRef} type="text" /><br />
      <label>Tel nr.</label><br />
      <input ref={telRef} type="number" /><br />
      <label>Aadress</label><br />
      <input ref={aadressRef} type="text" /><br />

      <button onClick={lisaEsindus}>Lisa</button><br />

      <button className='nuppReset' onClick={reset}>Taasta algasetus</button>
      {esindus.map((esindus, index) => 
        <div key={index}>
              {esindus.keskus}
              <button onClick={() => kustuta(index)}>x</button>
              <button onClick={() => lisa(esindus)}>Lisa lõppu juurde</button>
              <Link to={"/muuda-esindus/" + index}>
              <button>Muuda</button>
              </Link>
              <Link to={"/esindus/" + esindus.keskus}>
              Vaata lähemalt
              </Link>
        </div>
    )}
    </div>
  )
}

export default HaldaEsindused