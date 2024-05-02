import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import hinnadFailist from "../data/hinnad.json"

function MuudaHind() {
  const {index} = useParams();
  const hind = hinnadFailist[index];
  const hindRef = useRef();
  const navigate = useNavigate();


  const muuda = () => {
    hinnadFailist[index] = Number(hindRef.current.value);
    navigate("/halda-hinnad");
}

  return (
    <div>
      <label htmlFor='hind'>Hind</label><br />
        <input id='nhind' ref={hindRef} type="number" defaultValue={hind} /><br />
        <button onClick={muuda}>Muuda</button><br />
    </div>
  )
}

export default MuudaHind