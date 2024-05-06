import React from 'react'
import { useParams } from 'react-router-dom';
import TalEsindusedFailist from "../data/Talesindused.json"
import NotFound from './NotFound';


function YksEsindus() {
    const {index} = useParams();
    const esindus = TalEsindusedFailist[index];

    if (esindus === undefined) {
      return <NotFound />
    }

  return (
    <div>
      <div>Esinduse nimi: {esindus}</div>
        <div>Asukoht: ....</div>
        <div>Avatud: ....</div>
    </div>
  )
}

export default YksEsindus