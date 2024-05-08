import React, { useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import tootedFailist from "../data/tooted.json";

//Toote faili lisamine
//
function LisaToode() {
    const [sonum, muudaSonum] = useState("Lisa uus toode!");
    const [tooted, muudaTooted] = useState(tootedFailist.slice());
    const luger = useRef();
    const toodeRef = useRef();
    const nimiRef = useRef();
    const hindRef = useRef();
    const piltRef = useRef();
    const aktiivsusRef = useRef();
    // const [buttonDisabled, setButtonDisabled] = useState(false);

    // function lisa() {
                                // function & const lahendus on samaväärne
// }

const lisaToode = () => {
    if (nimiRef.current.value === "") {
        muudaSonum("Tühja nimetusega ei saa toodet lisada!");
    } else {
      const uusToode = {
        "nimi": nimiRef.current.value, 
        "hind": Number(hindRef.current.value), 
        "aktiivne": aktiivsusRef.current.checked, 
        "pilt": piltRef.current.value,
      };
      tootedFailist.push(uusToode);
      muudaTooted(tootedFailist.slice());
  
      nimiRef.current.value = "";
      hindRef.current.value = "";
      piltRef.current.value = "";
      aktiivsusRef.current.checked = false;
  
        muudaSonum("Toode lisatud: " + nimiRef.current.value);
        nimiRef.current.value = "";
        toast("Toode lisatud!",
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
    }
}

const kontrolli = () => {
  if (nimiRef.current.value === "") {
    muudaSonum("Viga: Toode ei saa olla tühja nimetusega!");
    // setButtonDisabled(true);
    return;
  }
  if (nimiRef.current.value[0].toLowerCase() === nimiRef.current.value[0]) {
    muudaSonum("Viga: Toode ei alga suure tähega!");
  // setButtonDisabled(true);
    return;
  }
  if (nimiRef.current.value.includes("/") === true) {
    muudaSonum("Viga: Toode nimes ei saa olla kaldkriipsu!");
  // setButtonDisabled(false);
    return;
  }
  muudaSonum("");
  // setButtonDisabled(false);
}

  return (
    <div>
        <div>{sonum}</div>
        <label>Toote nimi</label><br />
        <input onChange={kontrolli} ref={nimiRef} type="text" /><br />
        <label>Toote hind</label><br />
        <input ref={hindRef} type="number" /><br />
        <label>Toote pilt</label><br />
        <input ref={piltRef} type="text" /><br />
        <label>Toote aktiivsus</label><br />
        <input ref={aktiivsusRef} type="checkbox" /><br />
        <button disabled={sonum.startsWith("Viga:")} onClick={lisaToode}>Lisa</button><br />
        {/* <label>Toote nimi </label> */}
        {/* <input onChange={kontrolli} ref={luger} type="text" /> */}
        {/* <button disabled={sonum.startsWith("Viga:")} onClick={lisaToode}>Sisesta</button> */}
        {/* <button disabled={buttonDisabled === true} onClick={lisa}>Sisesta</button> */}
        <Toaster
            position="bottom-center"
            reverseOrder={false}
            />
    </div>
  )
}

export default LisaToode