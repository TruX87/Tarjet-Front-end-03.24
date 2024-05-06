import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {
  const [tooted, muudaTooted] = useState(ostukorvFailist.slice());
  const [sonum, muudaSonum] = useState("");
    
    const reset = () => {
        ostukorvFailist.splice(0);
        muudaTooted(ostukorvFailist.slice());
        muudaSonum("Ostukorv on tühi");
    }

    // const kustutaEsimene = () => {
    //   tooted.splice(0, 1);   // 0-esimene(mitmendat kustutan); 1- kustuta üks(mitut kustutan korraga)   .remove()   .delete()
    //   muudaTooted(tooted.slice()); // HTMLi uuenduseks
    // }

    // const kustutaTeine = () => {
    //   tooted.splice(1, 1);  
    //   muudaTooted(tooted.slice()); 
    // }

    // const kustutaKolmas = () => {
    //   tooted.splice(2, 1);  
    //   muudaTooted(tooted.slice()); 
    // }

    const kustuta = (jrknr) => {
      ostukorvFailist.splice(jrknr, 1);  
      muudaTooted(ostukorvFailist.slice()); 
    }

    // const lisaVichy = () => {
    //   ostukorvFailist.push("Vichy");
    //   muudaTooted(ostukorvFailist.slice()); 
    // }

    const lisa = (toode) => {
      ostukorvFailist.push(toode);
      muudaTooted(ostukorvFailist.slice()); 
    }


  return (
    <div>
        <Link to="/avaleht">Mine avalehele</Link>
        <br /><br />
        <div>{sonum}</div>
        <div>
          <button className='nuppReset' onClick={reset}>Tühjenda ostukorv</button>
          {/* <button onClick={() => kustuta(0)}>Kustuta esimene</button>
          <button onClick={() => kustuta(1)}>Kustuta teine</button>
          <button onClick={() => kustuta(2)}>Kustuta kolmas</button> */}
          {/* <button onClick={lisaVichy}>Lisa Vishy</button>
          <button onClick={() => lisa("Vitamin Well")}>Lisa Vitamin Well</button> */}
            <span className='vastusText'>Ostukorvis olevate esemete arv:</span> 
            {tooted.length} 
            <span className='vastusText'>tk</span>
            <br />
            {tooted.map((t, index) => 
            <div key={index}>
              <img className='Header-logo' src={t.pilt} alt="" />
              {t.nimi} - {t.hind} € 
                  <button onClick={() => kustuta(index)}>x</button> 
                  <button onClick={() => lisa(t)}>Lisa lõppu juurde</button>
            </div>)}
        </div>
    </div>
  )
}

export default Ostukorv