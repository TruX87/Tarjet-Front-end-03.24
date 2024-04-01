import React, { useRef, useState } from 'react'

function LisaToode() {
    const [sonum, muudaSonum] = useState("");
    const luger = useRef();

    // function lisa() {
                                // functsion & const lahendus on samaväärne
// }

const lisa = () => {
    if (luger.current.value === "") {
        muudaSonum("Tühja nimetusega ei saa toodet lisada!");
    } else {
        muudaSonum("Toode lisatud: " + luger.current.value);
    }
}

  return (
    <div>
        <div>{sonum}</div>
        <label>Toote nimi</label>
        <input ref={luger} type="text" />
        <button onClick={lisa}>Sisesta</button>
    </div>
  )
}

export default LisaToode