import React, { useState } from 'react'

function Esindused() {
    const [linn, muudaLinn] = useState("Tallinn");  // React teeb nii, tema vahetab olekuid
    // let linn = "Tallinn";   tavaline JavaScript teeb nii

  return (
    <div>
        <div>Hetkel aktiivne linn: {linn}</div>
        <button onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
        <button onClick={() => muudaLinn("Tartu")}>Tartu</button>
        <button onClick={() => muudaLinn("Pärnu")}>Pärnu</button>
        <button onClick={() => muudaLinn("Narva")}>Narva</button>

        {/* <button onClick={() => {linn = "Tallinn"}}>Tallinn</button>
        <button onClick={() => {linn = "Tartu"}}>Tartu</button>
        <button onClick={() => {linn = "Pärnu"}}>Pärnu</button>
        <button onClick={() => {linn = "Narva"}}>Narva</button> */}

       {linn === "Tallinn" &&  <div>
        <div>Ülemiste</div>
            <div>Rocca al Mare</div>
            <div>Magistrali</div>
            <div>Vesse</div>
            <div>Kristiine</div>
            <div>Järveotsa</div>
        </div>}

        {linn === "Tartu" && <div>
            <div>Raatuse</div>
            <div>Lõunakeskus</div>
        </div>}

        {linn === "Pärnu" && <div>Port Artur 2</div>}

        {linn === "Narva" && <div>Fama</div>}
    </div>
  )
}

export default Esindused