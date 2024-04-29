import React from 'react'
import { useState } from 'react';

function Numbrid() {
    const [numbrid, muudaNumbrid] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135, 22, 56]);

    const reset = () => {
        muudaNumbrid([4, 23, 7, 39, 19, 0, 9, 14, 135, 22, 56]);
    }

    const sorteeriNumbridVaiksemast = () => {
        numbrid.sort((a,b) => a - b);
        muudaNumbrid(numbrid.slice());
    }

    const sorteeriNumbridKah = () => {
        numbrid.sort((a,b) => b - a);
        muudaNumbrid(numbrid.slice());
    }

    const sorteeriAZEsimeseJ2rgi = () => {
        numbrid.sort((a,b) => a.toString().localeCompare(b.toString()));
        muudaNumbrid(numbrid.slice());
    }

    const sorteeriZAEsimeseJ2rgi = () => {
        numbrid.sort((a,b) => b.toString().localeCompare(a.toString()));
        muudaNumbrid(numbrid.slice());
    }

    const filtreeriSuuremadKui8 = () => {
        const vastus = numbrid.filter(e => e > 8);
        muudaNumbrid(vastus);
    }

    const filtreeriVäiksemadKui10 = () => {
        const vastus = numbrid.filter(e => e < 10);
        muudaNumbrid(vastus);
    }

    const filtreeriPaarisarvud = () => {
        const vastus = numbrid.filter(e => e % 2 === 0);
        muudaNumbrid(vastus);
    }

    const filtreeriPaaritudArvud = () => {
        const vastus = numbrid.filter(e => e % 2 !== 0);
        muudaNumbrid(vastus);
    }

    const filtreeriAlgavadÜhega = () => {
        const vastus = numbrid.filter(e => e.toString().startsWith('1'));
        muudaNumbrid(vastus);
    }

    const filtreeriSisaldavadKolmest = () => {
        const vastus = numbrid.filter(e => e.toString().includes('3'));
        muudaNumbrid(vastus);
    }

  return (
    <div>
        <div>
        
        <br /><br />
        <button onClick={sorteeriNumbridVaiksemast}>Sorteeri numbrid kasvavalt</button>
        <button onClick={sorteeriNumbridKah}>Sorteeri numbrid kahanevalt</button>
        <button onClick={sorteeriAZEsimeseJ2rgi}>Sorteeri esimese numbri järgi A-Z</button>
        <button onClick={sorteeriZAEsimeseJ2rgi}>Sorteeri esimese numbri järgi A-Z</button>
        <br /><br />
        <button onClick={filtreeriSuuremadKui8}>Jäta alles suuremad kui 8</button>
        <button onClick={filtreeriVäiksemadKui10}>Jäta alles väiksemad kui 10</button>
        <button onClick={filtreeriPaarisarvud}>Jäta alles paarisarvud</button>
        <button onClick={filtreeriPaaritudArvud}>Jäta alles paaritud arvud</button>
        <button onClick={filtreeriAlgavadÜhega}>Jäta alles numbrid mis algavad 1-ga</button>
        <button onClick={filtreeriSisaldavadKolmest}>Jäta alles numbrid mis sisaldavad 3-e</button>
        <br /><br />
        <button onClick={reset}>Taasta algasetus</button>
        <span>Numbrite koguarv: {numbrid.length} tk</span>
        <br /><br />
        {numbrid.map((numbrid, index) => <div key={index}>{numbrid}</div>)}
        </div>
    </div>
  )
}

export default Numbrid