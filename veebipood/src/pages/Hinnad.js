import React from 'react'
import { useState } from 'react'
import hinnadJSON from "../data/hinnad.json";
import { Link } from 'react-router-dom';

function Hinnad() {
    const [hinnad, muudaHinnad] = useState(hinnadJSON.slice());
    const [uusHind, muudaUusHind] = useState('');
    const [hindKustutamine, muudaHindKustutamine] = useState('');

    const originaali = () => {
        muudaHinnad(hinnadJSON.slice());
    }

    const sorteeriKasvavalt = () => {
        hinnad.sort((a,b) => a.nr - b.nr);
        muudaHinnad(hinnad.slice());
    }

    const sorteeriZA = () => {
        hinnad.sort((a,b) => b.nr.toString().localeCompare(a.nr));
        muudaHinnad(hinnad.slice());
    }

    const filtreeriSuuremadKui50 = () => {
        const vastus = hinnad.filter(hind => hind.nr > 50);
        muudaHinnad(vastus);
    }

    const reset = () => {
        muudaHinnad(hinnadJSON.slice());
    }

    const arvutaKeskmineHind = () => {
        const sum = hinnad.reduce((acc, curr) => acc + curr.nr, 0);
        const keskmine = sum / hinnad.length;
        alert(`Keskmine hind: ${keskmine.toFixed(2)} €`);
    }

    const filtreeriVahemikuJargi = (algus, lopp) => {
        const filtered = hinnad.filter(hind => hind.nr >= algus && hind.nr <= lopp);
        muudaHinnad(filtered);
    }

    const lisaUusHind = () => {
        if (!uusHind) return;
        const hind = parseInt(uusHind);
        muudaHinnad([...hinnad, hind]);   // Hind muuda ära objektiks halda hinnad sees
        muudaUusHind('');
    }

    const eemaldaHind = () => {
        if (!hindKustutamine) return;
        const hind = parseInt(hindKustutamine);
        const filtritud = hinnad.filter(h => h.nr !== hind);
        muudaHinnad(filtritud);
        muudaHindKustutamine('');
    }
    const kokku = () => {
        let summa = 0;
        hinnad.forEach(h => summa = summa + h.nr);
        return summa;
    }

    return (
    <div>
        <div>Hinnad kokku: {kokku()}</div>
        <button onClick={originaali}>Originaali</button>
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
        {/* {hinnad.map(hind => <div>{hind} €</div>)} */}
        {hinnad.map((hind, index) => 
        <div key={index}>
            {hind.nr} €
            <Link to={"/hind/" + hind.nr}>Vaata lähemalt</Link>
            </div>)}
        
        <br />
        <button className='nuppKeskmineHind' onClick={arvutaKeskmineHind}>Arvuta keskmine hind</button>
    </div>
  )
}

export default Hinnad