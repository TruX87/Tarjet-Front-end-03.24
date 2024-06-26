import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import hinnadFailist from "../data/hinnad.json"
import NotFound from './NotFound';

function MuudaHind() {
  const {index} = useParams();
  const hind = hinnadFailist[index];
  const hindRef = useRef();
  const navigate = useNavigate();


  const muuda = () => {
    // hinnadFailist[index] = {nr: Number(hindRef.current.value), lisaja: "Roobert"};  //siin paneb numbri, mitte objekti
    const uusHind = {nr: Number(hindRef.current.value), lisaja: "Roobert"};
    hinnadFailist[index] = uusHind;
    
    navigate("/halda-hinnad");
}

if (hind === undefined) {
  return <NotFound />
}

  return (
    <div>
      <label htmlFor='hind'>Hind</label><br />
        <input id='nhind' ref={hindRef} type="number" defaultValue={hind.nr} /><br />
        <button onClick={muuda}>Muuda</button><br />
    </div>
  )
}

export default MuudaHind