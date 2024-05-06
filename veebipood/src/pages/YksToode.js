import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json"

function YksToode() {
    const {nimi} = useParams();
    // const toode = tootedFailist[index];  <--- järjekorranumbri järgi leidmine
    // kõik muud leidmised (nime, id, hinna järgi)
    const toode = tootedFailist.find(t => t.nimi === nimi);
    //  ["BMW", "Nobe", "Tesla"].find( => )
    //  1. "BMW" => "BMW" === "Tesla"     false
    //  2. "Nobe" => "Nobe" === "Tesla"   false
    //  3. "Tesla" => "Tesla" === "Tesla"   true   ---> paneb ta muutuja "toode" sisse

    if (toode === undefined) {
      return <div>Toodet ei leitud</div>
    }

  return (
    <div>
        <div>Toote nimi: {toode.nimi}</div>
        <div>Hind: {toode.hind} €</div>
        <div>Kirjeldus: {toode.aktiivne ? <span>Toodet saab osta</span> : <span>Toodet ei saa osta</span>}</div>
        <img className='Header-logo' src={toode.pilt} alt="toote pilt" />
    </div>
  )
}

export default YksToode