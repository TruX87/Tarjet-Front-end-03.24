import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Ostukorv() {
  const [tooted, muudaToodet] = useState(["Coca","Fanta","Sprite","Red bull"]);
  const [sonum, muudaSonum] = useState("");
    
    const reset = () => {
        muudaToodet([]);
        muudaSonum("Ostukorv on tühi");
    }

  // ["Coca","Fanta","Sprite","Red bull"]

  //Koguarv +
  // tühjendamise nupp +
  // kui ostukorv tühi, siis alles kuvab ,,Ostukorv on tühi''
  return (
    <div>
        <Link to="/avaleht">Mine avalehele</Link>
        <br /><br />
        <div>{sonum}</div>
        <div>
          <button className='nuppReset' onClick={reset}>Tühjenda ostukorv</button>
            <text className='vastusText'>Otukorvis olevate esemete arv:</text> {tooted.length} <text className='vastusText'>tk</text><br />
            {tooted.map(t => <div key={t}>{t}</div>)}
        </div>
    </div>
  )
}

export default Ostukorv