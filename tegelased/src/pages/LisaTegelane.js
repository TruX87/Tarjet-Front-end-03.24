import React from 'react'
import {useRef, useState } from "react";

function LisaTegelane() {
    const [sonum, uuendaSonum] = useState("Vali tegelane");
    const luger = useRef();

const lisaUusTegelane = () => {
    if (luger.current.value === "") {
      uuendaSonum("Tühja nimega ei saa sisestada!");
    } else {
      uuendaSonum("Tegelane lisatud");
    }
}

  return (
    <div>
        <div>{sonum}</div>
        <label>Tegelase nimi</label>
        <br />
        <input ref={luger} type="text" />
        <br />
        <button onClick={lisaUusTegelane}>Lisa uus</button>
        <br />
    </div>
  )
}

export default LisaTegelane