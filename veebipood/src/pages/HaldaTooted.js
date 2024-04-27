import React from 'react'
import tootedFailist from "../data/tooted.json";
import { useState } from 'react';
import { useRef } from 'react';


function HaldaTooted() {
  const [tooted, muudaTooted] = useState(tootedFailist.slice());
  const toodeRef = useRef();

  const kustuta = (toode) => {
    tootedFailist.splice(toode);
    muudaTooted(tootedFailist.slice());

  }
  const lisa = (toode) => {
    tootedFailist.push(toode);
    muudaTooted(tootedFailist.slice());
  }

  const lisaToode = () => {
    tootedFailist.push(toodeRef.current.value);
    muudaTooted(tootedFailist.slice());
  }

  return (
    <div>
      <label>Toote nimi</label><br />
      <input ref={toodeRef} type="text" /><br />
      <button onClick={lisaToode}>Lisa</button><br />
      {tooted.map((toode, index) => 
        <div key={index}>
              {toode}
              <button onClick={() => kustuta(index)}>x</button>
              <button onClick={() => lisa(toode)}>Lisa lõppu juurde</button>
        </div>
    )}
    </div>
  )
}

export default HaldaTooted