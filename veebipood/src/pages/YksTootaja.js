import React from 'react'
import tootajadFailist from "../data/tootajad.json"
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

function YksTootaja() {
  const {nimi} = useParams();
    const tootaja = tootajadFailist.find(t => t === nimi);

    if (tootaja === undefined) {
      return <NotFound />
    }

  return (
    <div>
      <div>Töötaja nimi: {tootaja}</div>
      <div>Amet: ....</div>
        <div>Tutvustus: ....</div>
    </div>
  )
}

export default YksTootaja