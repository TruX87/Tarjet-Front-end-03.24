import React from 'react'
import { useState } from 'react';

function Tooted() {
  const [tooted, muudaTooted] = useState(["Nobe","BMW","Tesla","Saab","Opel"]);

  // sorteeri a-z +
  // sorteeri z-a +
  // sorteeri tähed kasv +
  // sorteeri tähed kah +
  // sorteeri kolmas täht tähestiku järjekorras +
  //koguarv +


  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.localeCompare(b));
    muudaTooted(tooted.slice());
    
}

const sorteeriZA = () => {
    tooted.sort((a,b) => b.localeCompare(a));
    muudaTooted(tooted.slice());
} 

const sorteeriTahemargidVaiksemast = () => {
    tooted.sort((a,b) => a.length - b.length);
    muudaTooted(tooted.slice());
}

const sorteeriTahemargidKah = () => {
    tooted.sort((a,b) => b.length - a.length);
    muudaTooted(tooted.slice());

}

const sorteeriKolmasTähtAZ = () => {
  tooted.sort((a,b) => a[2].localeCompare(b[2]));
  muudaTooted(tooted.slice());
}

  return (
    <div><br />
      <button className='nuppFilter' onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button className='nuppFilter' onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button className='nuppFilter' onClick={sorteeriTahemargidVaiksemast}>Sorteeri tähemärgid kasvavalt</button>
      <button className='nuppFilter' onClick={sorteeriTahemargidKah}>Sorteeri tähemärgid kahanevalt</button>
      <button className='nuppFilter' onClick={sorteeriKolmasTähtAZ}>Sorteeri kolmandast tähest A-Z</button>
      <br /><br />
        <div>
            <text className='vastusText'>Töödete koguarv:</text> {tooted.length} <text className='vastusText'>tk</text><br />
            <br />{tooted.map(t => <div>{t}</div>)}
        </div>
    </div>
  )
}

export default Tooted