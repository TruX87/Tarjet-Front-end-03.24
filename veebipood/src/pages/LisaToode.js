import React, { useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

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

  return (
    <div>
        <div>{sonum}</div>
        <label>Toote nimi</label>
        <input ref={luger} type="text" />
        <button onClick={lisa}>Sisesta</button>

        <Toaster
            position="bottom-center"
            reverseOrder={false}
            />
    </div>
  )
}

export default LisaToode