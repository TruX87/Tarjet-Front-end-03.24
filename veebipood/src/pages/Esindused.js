import React, { useState } from 'react'
import TalesindusedFailist from "../data/Talesindused.json";
import TaresindusedFailist from "../data/Taresindused.json";
import PäresindusedFailist from "../data/Päresindused.json";
import NaresindusedFailist from "../data/Naresindused.json";
import { Link } from 'react-router-dom';

function Esindused() {
    const [linn, muudaLinn] = useState("Tallinn");  // React teeb nii, tema vahetab olekuid
    // let linn = "Tallinn";   tavaline JavaScript teeb nii
    const [keskused, muudaKeskused] = useState(TalesindusedFailist.slice());
    const [keskused2, muudaKeskused2] = useState(TaresindusedFailist.slice());
    const [keskused3, muudaKeskused3] = useState(PäresindusedFailist.slice());
    const [keskused4, muudaKeskused4] = useState(NaresindusedFailist.slice());

    const sorteeriAZ = () => {
      keskused.sort((a,b) => a.keskus.localeCompare(b.keskus));
      keskused2.sort((a,b) => a.localeCompare(b));
      keskused3.sort((a,b) => a.localeCompare(b));
      keskused4.sort((a,b) => a.localeCompare(b));
      muudaKeskused(keskused.slice());
      muudaKeskused2(keskused2.slice());
      muudaKeskused3(keskused3.slice());
      muudaKeskused4(keskused4.slice());
  }

    const sorteeriZA = () => {
      keskused.sort((a,b) => b.keskus.localeCompare(a.keskus));
      keskused2.sort((a,b) => b.localeCompare(a));
      keskused3.sort((a,b) => b.localeCompare(a));
      keskused4.sort((a,b) => b.localeCompare(a));
      muudaKeskused(keskused.slice());
      muudaKeskused2(keskused2.slice());
      muudaKeskused3(keskused3.slice());
      muudaKeskused4(keskused4.slice());
  }

    const sorteeriTahemargidKasv = () => {
     keskused.sort((a,b) => a.keskus.length - b.keskus.length);
     keskused2.sort((a,b) => a.length - b.length);
     keskused3.sort((a,b) => a.length - b.length);
     keskused4.sort((a,b) => a.length - b.length);
     muudaKeskused(keskused.slice());
     muudaKeskused2(keskused2.slice());
     muudaKeskused3(keskused3.slice());
     muudaKeskused4(keskused4.slice());
  }

  const sorteeriTahemargidKah = () => {
    keskused.sort((a,b) => b.keskus.length - a.keskus.length);
    keskused2.sort((a,b) => b.length - a.length);
    keskused3.sort((a,b) => b.length - a.length);
    keskused4.sort((a,b) => b.length - a.length);
    muudaKeskused(keskused.slice());
    muudaKeskused2(keskused2.slice());
    muudaKeskused3(keskused3.slice());
    muudaKeskused4(keskused4.slice());
 }

    const sorteeriKolmasTähtAZ = () => {
      keskused.sort((a,b) => a.keskus[2].localeCompare(b.keskus[2]));
      keskused2.sort((a,b) => a[2].localeCompare(b[2]));
      keskused3.sort((a,b) => a[2].localeCompare(b[2]));
      keskused3.sort((a,b) => a[2].localeCompare(b[2]));
      muudaKeskused(keskused.slice());
      muudaKeskused2(keskused2.slice());
      muudaKeskused3(keskused3.slice());
      muudaKeskused4(keskused4.slice());
  }

    const filtreeri9Tahelised = () => {
      const vastus = keskused.filter(t => t.keskus.length === 9);
      const vastus2 = keskused2.filter(t => t.length === 9);
      const vastus3 = keskused3.filter(t => t.length === 9);
      const vastus4 = keskused4.filter(t => t.length === 9);
      muudaKeskused(vastus);
      muudaKeskused2(vastus2);
      muudaKeskused3(vastus3);
      muudaKeskused4(vastus4);
  }

    const filtreeriVahemalt7 = () => {
      const vastus = keskused.filter(t => t.keskus.length >= 7);
      const vastus2 = keskused2.filter(t => t.length >= 7);
      const vastus3 = keskused3.filter(t => t.length >= 7);
      const vastus4 = keskused4.filter(t => t.length >= 7);
      muudaKeskused(vastus);
      muudaKeskused2(vastus2);
      muudaKeskused3(vastus3);
      muudaKeskused4(vastus4);
  }

    const filtreeriISSisaldav = () => {
      const vastus = keskused.filter(t => t.keskus.includes("is"));
      const vastus2 = keskused2.filter(t => t.includes("is"));
      const vastus3 = keskused3.filter(t => t.includes("is"));
      const vastus4 = keskused4.filter(t => t.includes("is"));
      muudaKeskused(vastus);
      muudaKeskused2(vastus2);
      muudaKeskused3(vastus3);
      muudaKeskused4(vastus4);
  }

    const filtreeriITaht3 = () => {
      const vastus = keskused.filter(name => name.keskus.charAt(2) === 'i');
      const vastus2 = keskused2.filter(name => name.charAt(2) === 'i');
      const vastus3 = keskused3.filter(name => name.charAt(2) === 'i');
      const vastus4 = keskused4.filter(name => name.charAt(2) === 'i');
      muudaKeskused(vastus);
      muudaKeskused2(vastus2);
      muudaKeskused3(vastus3);
      muudaKeskused4(vastus4);
  }

    const filtreeriETahegaLop = () => {
      const vastus = keskused.filter(t => t.keskus.endsWith("e"));
      const vastus2 = keskused2.filter(t => t.endsWith("e"));
      const vastus3 = keskused3.filter(t => t.endsWith("e"));
      const vastus4 = keskused4.filter(t => t.endsWith("e"));
      muudaKeskused(vastus);
      muudaKeskused2(vastus2);
      muudaKeskused3(vastus3);
      muudaKeskused4(vastus4);
  }

  const kustuta = (index) => {
    const uuedKeskused = keskused.filter((_, i) => i.keskus !== index);
    const uuedKeskused2 = keskused2.filter((_, i) => i !== index);
    const uuedKeskused3 = keskused3.filter((_, i) => i !== index);
    const uuedKeskused4 = keskused4.filter((_, i) => i !== index);
    muudaKeskused(uuedKeskused);
    muudaKeskused2(uuedKeskused2);
    muudaKeskused3(uuedKeskused3);
    muudaKeskused4(uuedKeskused4);
  };
  
  const lisa = (keskus) => {
    muudaKeskused([...keskused, keskus.keskus]);
    muudaKeskused2([...keskused2, keskus]);
    muudaKeskused3([...keskused3, keskus]);
    muudaKeskused4([...keskused4, keskus]);
  };
  // const kustuta = (keskus) => {
    //   TalesindusedFailist.splice(keskus, 1); 
    //   TaresindusedFailist.splice(keskus, 1);
    //   PäresindusedFailist.splice(keskus, 1);
    //   NaresindusedFailist.splice(keskus, 1); 
    //   muudaKeskused(TalesindusedFailist.slice()); 
    //   muudaKeskused2(TaresindusedFailist.slice());
    //   muudaKeskused3(PäresindusedFailist.slice());
    //   muudaKeskused4(NaresindusedFailist.slice());
    // }

    // const lisa = (keskus) => {
    //   TalesindusedFailist.push(keskus);
    //   TaresindusedFailist.push(keskus);
    //   PäresindusedFailist.push(keskus);
    //   NaresindusedFailist.push(keskus);
    //   muudaKeskused(TalesindusedFailist.slice()); 
    //   muudaKeskused2(TaresindusedFailist.slice());
    //   muudaKeskused3(PäresindusedFailist.slice());
    //   muudaKeskused4(NaresindusedFailist.slice());
    // }

    const reset = () => {
      muudaKeskused(TalesindusedFailist.slice()); 
      muudaKeskused2(TaresindusedFailist.slice());
      muudaKeskused3(PäresindusedFailist.slice());
      muudaKeskused4(NaresindusedFailist.slice());
  }

  // Keskuste koguarv +
  // 1. Sorteeri A-Z +
  // 2. Sorteeri Z-A + 
  // 3. Sorteeri tähtede arv kasvavalt +
  // 4. Sorteeri tähtede arv kahanevalt +
  // 5. Sorteeri kolmas täht A-Z +

  // 1. Filtreeri kellel on täpselt 9 tähte + 
  // 2. Filtreeri kellel on vähemalt 7 tähte + 
  // 3. Filtreeri kellel on lühend "is" + 
  // 4. Filtreeri kellel on kolmas täht "i"  +
  // 5. Filtreeri kes lõppeb "e" tähega  +

  //HALDA failist otse + 
  // 1. Tühjenda +  aga kui lisada esindusi juurde või eemaldada, siis ei taasta. Taastab ainult filtri ja sorteeringu.
  // 2. Võimalda teda ajutiliselt kustutada +
  // 3. Võimalda teda lõppu juurde lisada +
  return (
    <div>
        <div>Hetkel aktiivne linn: {linn}</div>
        <button className={linn === "Tallinn" ? "linn-aktiivne" : 'linn'} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
        <button className={linn === "Tartu" ? "linn-aktiivne" : 'linn'} onClick={() => muudaLinn("Tartu")}>Tartu</button>
        <button className={linn === "Pärnu" ? "linn-aktiivne" : 'linn'} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>
        <button className={linn === "Narva" ? "linn-aktiivne" : 'linn'} onClick={() => muudaLinn("Narva")}>Narva</button>

        {/* <button onClick={() => {linn = "Tallinn"}}>Tallinn</button>
        <button onClick={() => {linn = "Tartu"}}>Tartu</button>
        <button onClick={() => {linn = "Pärnu"}}>Pärnu</button>
        <button onClick={() => {linn = "Narva"}}>Narva</button> */}
        <div>
          <br />
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahemargidKasv}>Sorteeri tähemärgid kasvavalt</button>
        <button onClick={sorteeriTahemargidKah}>Sorteeri tähemärgid kahanevalt</button>
        <button onClick={sorteeriKolmasTähtAZ}>Sorteeri kolmandast tähest A-Z</button>
        <br />
        <button onClick={filtreeri9Tahelised}>Jäta alles 9 tähelised</button>
        <button onClick={filtreeriVahemalt7}>Jäta alles kellel on vähemalt 7 tähte</button>
        <button onClick={filtreeriISSisaldav}>Jäta alles "is" tähepaari sisaldavad</button>
        <button onClick={filtreeriITaht3}>Jäta alles millel 3-s täht "i"</button>
        <button onClick={filtreeriETahegaLop}>Jäta alles mis lõppevad E-ga</button>
        </div>
       {linn === "Tallinn" &&  
          <div>
            <div>
              <br />
              <button className='nuppReset' onClick={reset}>Taasta algasetus</button>
              <span className='vastusText'>Keskuste koguarv:</span> {keskused.length} <span className='vastusText'>tk</span>
              </div><br />
            {keskused.map((keskus, index) => 
            <div key={index}>
              {keskus.keskus} 
                  <button onClick={() => kustuta(index)}>x</button> 
                  <button onClick={() => lisa(keskus.nimi)}>Lisa lõppu juurde</button>
                  <Link to={"/esindus/" + keskus}>
              Vaata lähemalt
              </Link>
              </div> )}
          </div>}

        {linn === "Tartu" && 
          <div>
            <div>
              <br />
              <button className='nuppReset' onClick={reset}>Taasta algasetus</button>
              <span className='vastusText'>Keskuste koguarv:</span> {keskused2.length} <span className='vastusText'>tk</span>
              </div><br />
              {keskused2.map((keskus, asutus) => 
            <div key={asutus}>
              {keskus} <button onClick={() => kustuta(asutus)}>x</button> 
                  <button onClick={() => lisa(keskus)}>Lisa lõppu juurde</button>
              </div> )}
            {/* <div>Raatuse</div>
            <div>Lõunakeskus</div> */}
        </div>}

        {linn === "Pärnu" && 
          <div>
            <div>
              <br />
              <button className='nuppReset' onClick={reset}>Taasta algasetus</button>
              <span className='vastusText'>Keskuste koguarv:</span> {keskused3.length} <span className='vastusText'>tk</span>
              </div><br />
              {keskused3.map((keskus, asutus) => 
            <div key={asutus}>
              {keskus} <button onClick={() => kustuta(asutus)}>x</button> 
                  <button onClick={() => lisa(keskus)}>Lisa lõppu juurde</button>
              </div> )}
            {/* Port Artur 2 */}
            </div>}

        {linn === "Narva" && 
            <div>
              <div>
              <br />
              <button className='nuppReset' onClick={reset}>Taasta algasetus</button>
              <span className='vastusText'>Keskuste koguarv:</span> {keskused4.length} <span className='vastusText'>tk</span>
              </div><br />
              {keskused4.map((keskus, asutus) => 
            <div key={asutus}>
              {keskus} <button onClick={() => kustuta(asutus)}>x</button> 
                  <button onClick={() => lisa(keskus)}>Lisa lõppu juurde</button>
              </div> )}
              {/* Fama */}
              </div>}
    </div>
  )
}

export default Esindused