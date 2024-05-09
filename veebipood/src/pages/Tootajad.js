import React from 'react'
import { useState } from 'react'
import tootajadJSON from "../data/tootajad.json";
import { Link } from 'react-router-dom';

function Tootajad() {
    const [tootajad, muudaTootajad] = useState(tootajadJSON.slice());
    
    const reset = () => {
        muudaTootajad(tootajadJSON.slice());
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
        //tootajad.reverse();  võimalik aga ei soovita
        muudaTootajad(tootajad.slice());
    }

    const sorteeriTeineTähtAZ = () => {
        tootajad.sort((a,b) => a[1].localeCompare(b[1]));
        muudaTootajad(tootajad.slice());
    }    

    const filtreeriVaiksemKui5 = () => {
        //["Coca","Fanta","Sprite"].filter();
        // .filter("Coca" => "Coca".length < 5)
        // .filter("Coca" => 4 < 5) TRUE ehk jätame alles
        // .filter(Fanta" => 5 < 5) TRUE
        // .filter(Sprite" => 6 < 5) TRUE
        const vastus = tootajadJSON.filter(t => t.length < 5);
        muudaTootajad(vastus);
    }

    const filtreeriSuuremKui5 = () => {
        const vastus = tootajadJSON.filter(t => t.length > 5);
        muudaTootajad(vastus);
    }

    const filtreeriKTahegaAlg = () => {
        const vastus = tootajadJSON.filter(t => t.startsWith("K"));
        muudaTootajad(vastus);
 }

    const filtreeriAISisaldav = () => {
        const vastus = tootajadJSON.filter(t => t.includes("ai"));
        muudaTootajad(vastus);
}

    const filtreeri3Tahelised = () => {
        const vastus = tootajadJSON.filter(t => t.length === 3);
        muudaTootajad(vastus);
}

const filtreeriMTahegaAlg = () => {
    const vastus = tootajadJSON.filter(t => t.startsWith("M"));
    muudaTootajad(vastus);
}

const filtreeriITaht3 = () => {
    const vastus = tootajadJSON.filter(name => name.charAt(2) === 'i');
    muudaTootajad(vastus);
}

const filtreeriPaarisTähed = () => {
    const vastus = tootajadJSON.filter(nimi => nimi.length % 2 === 0);
    muudaTootajad(vastus);
}

const kustuta = (indeks) => {
    const uuedTootajad = tootajad.filter((_, index) => index !== indeks);
    muudaTootajad(uuedTootajad);
}

const lisa = (uusIsik) => {
    muudaTootajad([...tootajad, uusIsik]);
}
// const kustuta = (isik) => {
//     tootajadJSON.splice(isik);
//     muudaTootajad(tootajadJSON.slice());

// }
//   const lisa = (isik) => {
//     tootajadJSON.push(isik);
//     muudaTootajad(tootajadJSON.slice());
// }


//HALDA failist otse + 
//Lisa lõppu juurde
// kustutamine

const kokku = () => {
    //const --> ei luba võrdusmärgiga teda muuta
    //let --> lubab muutujat otse võrdusmärgiga muuta
    let summa = 0;
    // summa = summa + 5;
    // summa = summa + 5;
    // summa = summa + 4;
    // summa = summa + 3;
    // summa = summa + 6;
    //["Kaido","Epp","Maarja"].forEach()
    // forEach("Kaido" => 5 = 0 + 5)
    // forEach("Epp" => 8 = 5 + 3)
    // forEach("Maarja" => 14 = 8 + 6)
    tootajad.forEach(t => summa = summa + t.length);
    return summa;
}
//kui teeme funktsiooni onClickiga:
//onClick={lisa}  või  onClick{() => lisa()}

// Kui teeme funktsiooni väljakutse mitte onClickiga
  // <div> {lisa()} </div>

  return (
    <div>
        <br />
        <div>Tähemärgid kokku: {kokku()}</div><br />
        <button className='nuppFilter' onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button className='nuppFilter' onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button className='nuppFilter' onClick={sorteeriKolmasTähtAZ}>Sorteeri kolmandast tähest A-Z</button>
        <button className='nuppFilter' onClick={sorteeriTeineTähtAZ}>Sorteeri teisest tähest A-Z</button>
        <button className='nuppFilter' onClick={sorteeriTahemargidVaiksemast}>Sorteeri tähemärgid kasvavalt</button>
        <button className='nuppFilter' onClick={sorteeriTahemargidKah}>Sorteeri tähemärgid kahanevalt</button><br />
        <button className='nuppFilter' onClick={filtreeriVaiksemKui5}>Jäta alles kellel on nime pikkus väiksem kui 5</button>
        <button className='nuppFilter' onClick={filtreeriSuuremKui5}>Jäta alles kellel on nime pikkus suurem kui 5</button>
        <button className='nuppFilter' onClick={filtreeriKTahegaAlg}>Jäta alles kes algavad K-ga</button>
        <button className='nuppFilter' onClick={filtreeriAISisaldav}>Jäta alles "ai" tähepaari sisaldavad</button><br />
        <button className='nuppFilter' onClick={filtreeri3Tahelised}>Jäta alles 3 tähelised</button>
        <button className='nuppFilter' onClick={filtreeriMTahegaAlg}>Jäta alles kes algavad M-ga</button>
        <button className='nuppFilter' onClick={filtreeriITaht3}>Jäta alles kellel 3-s täht "i"</button>
        <button className='nuppFilter' onClick={filtreeriPaarisTähed}>Jäta alles kellel on paarisarv tähti</button>
        <br /><br />
        <div>
            <button className='nuppReset' onClick={reset}>Taasta algasetus</button>
            <span className='vastusText'>Töötajate koguarv:</span> {tootajad.length} <span className='vastusText'>tk</span><br />
                    {tootajad.map((isik, index) => 
            <div key={index}>
                {isik}<button onClick={() => kustuta(index)}>x</button>
                <button onClick={() => lisa(isik)}>Lisa lõppu juurde</button>
                <Link to={"/tootaja/" + index}>
              Vaata lähemalt
              </Link>
            </div>)}
        </div>
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