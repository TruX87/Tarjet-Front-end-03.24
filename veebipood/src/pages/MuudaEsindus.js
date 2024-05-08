import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import TalEsindusedFailist from "../data/Talesindused.json"
import NotFound from './NotFound';

function MuudaEsindus() {
    const {index} = useParams();
    const esindus = TalEsindusedFailist[index];
    const nimiRef = useRef();
    const keskusRef = useRef();
    const telRef = useRef();
    const aadressRef = useRef();
    const navigate = useNavigate();
    const [sonum, muudaSonum] = useState("");


    const muuda = () => {
      if (nimiRef.current.value === "") {
        muudaSonum("Esinduse nimetus ei saa olla tühi!")
        return;
      }
      
      const uusEsindus = {
        "keskus": keskusRef.current.value, 
        "tel": Number(telRef.current.value), 
        "aadress": aadressRef.current.checked, 
      };

      TalEsindusedFailist[index] = uusEsindus;
        navigate("/halda-esindused");
    }

    if (esindus === undefined) {
      return <NotFound />
    }


  return (
    <div>
      <div>{sonum}</div>
        <label htmlFor='nimi'>Esinduse nimi</label><br />
        <input id='nimi' ref={keskusRef} type="text" defaultValue={esindus.keskus} /><br />
        
        <label>Tel nr</label><br />
        <input ref={telRef} type="number" defaultValue={esindus.tel} /><br />

        <label>Aadress</label><br />
        <input ref={aadressRef} type="text" defaultValue={esindus.aadress} /><br />

        <button onClick={muuda}>Muuda</button><br />
    </div>
  )
}

export default MuudaEsindus