import React from 'react'
import { useParams } from 'react-router-dom'
import hinnadFailist from "../data/hinnad.json"

function YksHind() {
    const {index} = useParams();
    const hind = hinnadFailist[index];

  return (
    <div>
        <div>Hind: {hind} €</div>
    </div>
  )
}

export default YksHind