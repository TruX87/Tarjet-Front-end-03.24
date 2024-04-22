import React from 'react'
import { useState } from 'react'

function Tootajad() {
    const [tootajad, muudaTootajad] = useState(["Urmet","Kaido","Liina","Maiki","Heidi","Epp","Kaire","Anet","Maarja"]);
    
    const reset = () => {
        muudaTootajad(["Urmet","Kaido","Liina","Maiki","Heidi","Epp","Kaire","Anet","Maarja"]);
    }

    const sorteeriAZ = () => {
        //tootajad.sort();
        tootajad.sort((a,b) => a.localeCompare(b));
        muudaTootajad(tootajad.slice());
        //muudaTootajad([...tootajad]); mälukoha ära kustutamine, muidu uuendab iseennast iseenda kaudu
    }

    const sorteeriZA = () => {
        tootajad.sort((a,b) => b.localeCompare(a));
        muudaTootajad(tootajad.slice());
    } 

    const sorteeriTahemargidVaiksemast = () => {
        tootajad.sort((a,b) => a.length - b.length);
        muudaTootajad(tootajad.slice());
    }

    const sorteeriTahemargidKah = () => {
        tootajad.sort((a,b) => b.length - a.length);
        //tootajad.reverse();  väimalik aga ei soovita
        muudaTootajad(tootajad.slice());
    }

    const sorteeriKolmasTähtAZ = () => {
        tootajad.sort((a,b) => a[2].localeCompare(b[2]));
        //tootajad.reverse();  väimalik aga ei soovita
        muudaTootajad(tootajad.slice());
    }

    const filtreeriVaiksemKui5 = () => {
        //["Coca","Fanta","Sprite"].filter();
        // .filter("Coca" => "Coca".length < 5)
        // .filter("Coca" => 4 < 5) TRUE ehk jätame alles
        // .filter(Fanta" => 5 < 5) TRUE
        // .filter(Sprite" => 6 < 5) TRUE
        const vastus = tootajad.filter(t => t.length < 5);
        muudaTootajad(vastus);
    }

    const filtreeriKTahegaAlg = () => {
        const vastus = tootajad.filter(t => t.startsWith("K"));
        muudaTootajad(vastus);
 }
//nupp kolmas täht A-Z
// teine täht A-Z

//filtreeri
//- Täpselt 3 tähelised
//- rohkem kui 5 tähelised
//-"ai" lühendit sisaldavad
//-kellel on kolmas täht "i"
//-"M" tähega algavad
// Huvitav: paarisarv tähti

  return (
    <div>
        <button onClick={reset}>Taasta algasetus</button>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahemargidVaiksemast}>Sorteeri tähemärgid kasvavalt</button>
        <button onClick={sorteeriTahemargidKah}>Sorteeri tähemärgid kahanevalt</button>
        <button onClick={filtreeriVaiksemKui5}>Jäta alles kellel on nime pikkus väiksem kui 5</button>
        <button onClick={filtreeriKTahegaAlg}>Jäta alles kes algavad K-ga</button>
        <div>Töötajate koguarv: {tootajad.length} tk</div>
        {tootajad.map(t => <div>{t}</div>)}
        {/* <div>Urmet</div>
        <div>Kaido</div>
        <div>Liina</div>
        <div>Maiki</div>
        <div>Heidi</div>
        <div>Epp</div>
        <div>kaire</div>
        <div>Anet</div>
        <div>Maarja</div> */}
    </div>
  )
}

export default Tootajad