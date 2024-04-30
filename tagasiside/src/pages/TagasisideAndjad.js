import React, { useRef, useState } from 'react'
import andjateFail from "../data/nimed.json";

function TagasisideAndjad() {
    const [andjad, uuendaAndjad] = useState(andjateFail);
    const andjadRef = useRef();

    function kustuta(index) {
        andjad.splice(index,1);
        uuendaAndjad(andjad.slice());
      }

    function lisaUusAndja() {
        andjad.push(andjadRef.current.value);
        uuendaAndjad(andjad.slice());
    }

    const filtreeriMTahegaAlg = () => {
        const vastus = andjad.filter(t => t.startsWith("M"));
        uuendaAndjad(vastus);
    }

    const filtreeri6Tahelised = () => {
        const vastus = andjad.filter(t => t.length === 6);
        uuendaAndjad(vastus);
    }

    const filtreeriYTahegaLop = () => {
        const vastus = andjad.filter(t => t.endsWith("y"));
        uuendaAndjad(vastus);
    }

    const sorteeriZA = () => {
        andjad.sort((a,b) => b.localeCompare(a));
        uuendaAndjad(andjad.slice());
    }

    const insertEST = () => {
        const vastus = andjad.map(t => "EST-" + t);
        uuendaAndjad(vastus);
    }

  return (
    <div>
        <br />
        <button onClick={filtreeriMTahegaAlg}>Jäta alles kes algavad M-ga</button>
        <button onClick={filtreeriYTahegaLop}>Jäta alles kes lõppevad Y-ga</button>
        <button onClick={filtreeri6Tahelised}>Jäta alles 6 kohalised nimed</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={insertEST}>Lisa nime ette EST</button>
        <br /><br />
        <label>Lisa uus tagasiside:</label>
          <input ref={andjadRef} type="text" />
          <button onClick={() => lisaUusAndja()}>Sisesta</button>
          <br /><br />
        <div>
        <span>Tagasiside andjate koguarv:</span> {andjad.length} <span>tk</span>
        <br /><br />
        {andjad.map((andjad, index) => 
        <div>
          <span>{andjad}</span>
          <button onClick={() => kustuta(index)}>X</button>
          </div>)}
    </div>
    </div>
  )
}

export default TagasisideAndjad