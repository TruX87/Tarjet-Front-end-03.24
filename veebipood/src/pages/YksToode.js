import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json"

function YksToode() {
    const {index} = useParams();
    const toode = tootedFailist[index];

  return (
    <div>
        <div>Toote nimi: {toode}</div>
        <div>Hind: {5} €</div>
        <div>Kirjeldus: ....</div>
    </div>
  )
}

export default YksToode