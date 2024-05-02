import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import TalEsindusedFailist from "../data/Talesindused.json"

function MuudaEsindus() {
    const {index} = useParams();
    const esindus = TalEsindusedFailist[index];
    const nimiRef = useRef();
    const navigate = useNavigate();
    const [sonum, muudaSonum] = useState("");


    const muuda = () => {
      if (nimiRef.current.value === "") {
        muudaSonum("Esinduse nimetus ei saa olla tühi!")
        return;
      }
      
      TalEsindusedFailist[index] = nimiRef.current.value;
        navigate("/halda-esindused");
    }
  return (
    <div>
      <div>{sonum}</div>
        <label htmlFor='nimi'>Esinduse nimi</label><br />
        <input id='nimi' ref={nimiRef} type="text" defaultValue={esindus} /><br />
        <button onClick={muuda}>Muuda</button><br />
    </div>
  )
}

export default MuudaEsindus