import React, { useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import tootedFailist from "../data/tooted.json";

//Toote faili lisamine
//
function LisaToode() {
    const [sonum, muudaSonum] = useState("Lisa uus toode!");
    const [tooted, muudaTooted] = useState(tootedFailist.slice());
    const luger = useRef();
    // const [buttonDisabled, setButtonDisabled] = useState(false);

    // function lisa() {
                                // function & const lahendus on samaväärne
// }

const lisa = () => {
    if (luger.current.value === "") {
        muudaSonum("Tühja nimetusega ei saa toodet lisada!");
    } else {
        muudaSonum("Toode lisatud: " + luger.current.value);
        luger.current.value = "";
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
  if (luger.current.value === "") {
    muudaSonum("Viga: Toode ei saa olla tühja nimetusega!");
    // setButtonDisabled(true);
    return;
  }
  if (luger.current.value[0].toLowerCase() === luger.current.value[0]) {
    muudaSonum("Viga: Toode ei alga suure tähega!");
  // setButtonDisabled(true);
    return;
  }
  if (luger.current.value.includes("/") === true) {
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
        <label>Toote nimi </label>
        <input onChange={kontrolli} ref={luger} type="text" />
        <button disabled={sonum.startsWith("Viga:")} onClick={lisa}>Sisesta</button>
        {/* <button disabled={buttonDisabled === true} onClick={lisa}>Sisesta</button> */}
        <Toaster
            position="bottom-center"
            reverseOrder={false}
            />
    </div>
  )
}

export default LisaToode