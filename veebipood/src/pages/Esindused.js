import React, { useState } from 'react'

function Esindused() {
    const [linn, muudaLinn] = useState("tallinn");

  return (
    <div>
        <div>Hetkel aktiivne linn: {linn}</div>
        <button onClick={() => muudaLinn("tallinn")}>Tallinn</button>
        <button onClick={() => muudaLinn("tartu")}>Tartu</button>
        <button onClick={() => muudaLinn("pärnu")}>Pärnu</button>
        <button onClick={() => muudaLinn("narva")}>Narva</button>

       {linn === "tallinn" &&  <div>
        <div>Ülemiste</div>
            <div>Rocca al Mare</div>
            <div>Magistrali</div>
            <div>Vesse</div>
            <div>Kristiine</div>
            <div>Järveotsa</div>
        </div>}

        {linn === "tartu" && <div>
            <div>Raatuse</div>
            <div>Lõunakeskus</div>
        </div>}

        {linn === "pärnu" && <div>Port Artur 2</div>}

        {linn === "narva" && <div>Fama</div>}
    </div>
  )
}

export default Esindused