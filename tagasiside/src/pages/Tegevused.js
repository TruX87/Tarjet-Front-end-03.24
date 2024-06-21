import React, { useState } from 'react'
import tegevusteFail from "../data/tegevused.json"

function Tegevused() {
    const [tegevused, uuendaTegevused] = useState(tegevusteFail);

    const n2itaKasutaja1 = () => {
        const vastus = tegevused.filter(element => element.userId === 1);
        uuendaTegevused(vastus);
    }

    const n2itaKasutaja2 = () => {
        const vastus = tegevused.filter(element => element.userId === 2);
        uuendaTegevused(vastus);
    }

    const n2itaKasutaja3 = () => {
        const vastus = tegevused.filter(element => element.userId === 3);
        uuendaTegevused(vastus);
    }
    const n2itaK6iki = () => {
        uuendaTegevused(tegevusteFail);
    }

  return (
    <div>
        <div>Näita kogu tegevuste arvu .lenght abil</div>
        <button onClick={() => n2itaKasutaja1()}>Kuva kõik kasutaja ID 1 tegevused</button>
        <button onClick={() => n2itaKasutaja2()}>Kuva kõik kasutaja ID 2 tegevused</button>
        <button onClick={() => n2itaKasutaja3()}>Kuva kõik kasutaja ID 3 tegevused</button>
        <button>Kuva kõik valmis tegevused</button>
        <button>Kuva kõik mittevalmis tegevused</button>
        <button>Kuva kõik "t" tähega algavad tegevused</button>
        <button>Kuva tegevused, millel on tähemärke rohkem kui 20</button>
        <button onClick={() => n2itaK6iki()}>Kuva kõik tegevused tagasi</button>
        {tegevused.map(element => 
        <div>
            <div>{element.userId}</div>
            <div>{element.id}</div>
            <div>{element.title}</div>
            <div>{element.completed}</div>
        </div>)}
    </div>
  )
}

export default Tegevused