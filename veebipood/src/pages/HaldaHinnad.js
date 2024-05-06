import React from 'react'
import { useState } from 'react';
import hinnadJSON from "../data/hinnad.json";
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function HaldaHinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadJSON.slice());
  const hindRef = useRef();

  const sort = () => {
    hinnad.sort();    // kas tahan ainult siin lehel seda muudatust näha
    // või tahan, et see muudatus läheks faili(teistele näha lehel)
  }

  const kustuta = (index) => {
    hinnadJSON.splice(index, 1);
    muudaHinnad(hinnadJSON.slice());
}

const lisa = (hind) => {
    hinnadJSON.push(hind);  //faili lisan ühe juurde
    muudaHinnad(hinnadJSON.slice()); 
  }

  const lisaHind = () => {
    hinnadJSON.push({nr: hindRef.current.value, lisaja: "Pipi"});
    muudaHinnad(hinnadJSON.slice());
  }
  return (
    <div>
      <label>Hind</label><br />
      <input ref={hindRef} type="text" /><br />
      <button onClick={lisaHind}>Lisa</button><br />

      <div>{hinnad.length} tk</div><br />
        {/* {hinnad.map(hind => <div>{hind} €</div>)} */}
        {hinnad.map((hind, index) => 
        <div key={index}>
            {hind.nr} € - lisaja: {hind.lisaja}
            <button onClick={() => kustuta(index)}>x</button>
                    <button onClick={() => lisa(hind)}>Lisa lõppu juurde</button>
                    <Link to={"/muuda-hind/" + index}>
                    <button>Muuda</button>
                    </Link>
            </div>)}
    </div>
  )
}

export default HaldaHinnad