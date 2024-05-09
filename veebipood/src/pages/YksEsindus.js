import React from 'react'
import { useParams } from 'react-router-dom';
import TalEsindusedFailist from "../data/Talesindused.json"
import NotFound from './NotFound';


function YksEsindus() {
    const {nimi} = useParams();
    const esindus = TalEsindusedFailist.find(t => t.keskus === nimi);

    if (esindus === undefined) {
      return <NotFound />
    }

  return (
    <div>
      <div>Esinduse nimi: {esindus.keskus}</div>
        <div>Asukoht: ....</div>
        <div>Avatud: ....</div>
    </div>
  )
}

export default YksEsindus