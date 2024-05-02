import React from 'react'
import tootajadFailist from "../data/tootajad.json"
import { useParams } from 'react-router-dom';

function YksTootaja() {
  const {index} = useParams();
    const tootaja = tootajadFailist[index];

  return (
    <div>
      <div>Töötaja nimi: {tootaja}</div>
      <div>Amet: ....</div>
        <div>Tutvustus: ....</div>
    </div>
  )
}

export default YksTootaja