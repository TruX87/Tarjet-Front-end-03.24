import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import tootajadFailist from "../data/tootajad.json"

function MuudaTootaja() {
    const {index} = useParams();
    const tootaja = tootajadFailist[index];
    const nimiRef = useRef();
    const navigate = useNavigate();
    const [sonum, muudaSonum] = useState("");


    const muuda = () => {
      if (nimiRef.current.value === "") {
        muudaSonum("Tootaja nimetus ei saa olla tühi!")
        return;
      }
      
        tootajadFailist[index] = nimiRef.current.value;
        navigate("/halda-tootajad");
    }

  return (
    <div>
      <div>{sonum}</div>
        <label htmlFor='nimi'>Töötaja nimi</label><br />
        <input id='nimi' ref={nimiRef} type="text" defaultValue={tootaja} /><br />
        <button onClick={muuda}>Muuda</button><br />
    </div>
  )
}

export default MuudaTootaja