import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json"
import { useNavigate, useParams } from 'react-router-dom'

function MuudaToode() {
    const {index} = useParams();
    const toode = tootedFailist[index];
    const nimiRef = useRef();
    const navigate = useNavigate();
    const [sonum, muudaSonum] = useState("");

    //use... Reacti hookid. Reacti erikood: tehakse midagi teisiti, kui tavaline JavaScript.
    //Reeglid:
    //1. Peab algama use eesliidesega
    //2. Peab olema imporditud.
    //3. Peab olema sulud lõpus.
    //4. Ei tohi olla funktsiooni sees loodud.
    //5. Ei tohi olla tingimuslikult loodud. if

    const muuda = () => {
      if (nimiRef.current.value === "") {
        muudaSonum("Toote nimetus ei saa olla tühi!")
        return;
      }
      
        tootedFailist[index] = nimiRef.current.value;
        navigate("/halda-tooted");
    }

    //Nupul peaks olema kas onClick={} või <Link to="" 
    //mitte mõlemad korraga, sest enne võiks koodilõik valmis saada ja seejärel suunamine toimuda

  return (
    <div>
        {/* <div>{toode}</div> */}
        <div>{sonum}</div>
        <label htmlFor='nimi'>Toote nimi</label><br />
        <input id='nimi' ref={nimiRef} type="text" defaultValue={toode} /><br />
        <button onClick={muuda}>Muuda</button><br />
    </div>
  )
}

export default MuudaToode