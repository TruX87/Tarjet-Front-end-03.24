import React from 'react'
import { useState } from 'react'

function Hinnad() {
    const [hinnad, muudaHinnad] = useState([31, 5, 123, 52, 8, 321, 12, 9, 41]);
    const [uusHind, muudaUusHind] = useState('');
    const [hindKustutamine, muudaHindKustutamine] = useState('');

    const sorteeriKasvavalt = () => {
        hinnad.sort((a,b) => a - b);
        muudaHinnad(hinnad.slice());
    }

    const sorteeriZA = () => {
        hinnad.sort((a,b) => b.toString().localeCompare(a));
        muudaHinnad(hinnad.slice());
    }

    const filtreeriSuuremadKui50 = () => {
        const vastus = hinnad.filter(hind => hind > 50);
        muudaHinnad(vastus);
    }

    const reset = () => {
        muudaHinnad([31, 5, 123, 52, 8, 321, 12, 9, 41]);
    }

    const arvutaKeskmineHind = () => {
        const sum = hinnad.reduce((acc, curr) => acc + curr, 0);
        const keskmine = sum / hinnad.length;
        alert(`Keskmine hind: ${keskmine.toFixed(2)} €`);
    }

    const filtreeriVahemikuJargi = (algus, lopp) => {
        const filtered = hinnad.filter(hind => hind >= algus && hind <= lopp);
        muudaHinnad(filtered);
    }

    const lisaUusHind = () => {
        if (!uusHind) return;
        const hind = parseInt(uusHind);
        muudaHinnad([...hinnad, hind]);
        muudaUusHind('');
    }

    const eemaldaHind = () => {
        if (!hindKustutamine) return;
        const hind = parseInt(hindKustutamine);
        const filtritud = hinnad.filter(h => h !== hind);
        muudaHinnad(filtritud);
        muudaHindKustutamine('');
    }

    return (
    <div>
        <button className='nuppReset' onClick={reset}>Taasta algväärtused</button>
        <button onClick={() => muudaHinnad([])}>Kustuta kõik</button>
        <button onClick={sorteeriKasvavalt}> Sorteeri kasvavalt</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={filtreeriSuuremadKui50}>Suuremad kui 50</button>
        <button onClick={() => filtreeriVahemikuJargi(10, 50)}>Filtreeri 10-50</button>
        <br />
        <input type="number" value={uusHind} onChange={e => muudaUusHind(e.target.value)} placeholder="Hind, mida lisada"/>
        <button onClick={lisaUusHind}>Lisa hind</button>
        <br />
        <input type="number" value={hindKustutamine} onChange={e => muudaHindKustutamine(e.target.value)} placeholder="Hind, mida kustutada"/>
        <button onClick={eemaldaHind}>Eemalda hind</button>
        
        <div>{hinnad.length} tk</div><br />
        {hinnad.map(hind => <div>{hind} €</div>)}
        {/* {hinnad.map((hind, index) => <div key={index}>{hind} €</div>)} */}
        <button className='nuppKeskmineHind' onClick={arvutaKeskmineHind}>Arvuta keskmine hind</button>
    </div>
  )
}

export default Hinnad