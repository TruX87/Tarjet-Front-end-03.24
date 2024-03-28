import React, { useState } from 'react'

function Seaded() {
    const [keel, muudaKeel] = useState("est");

  return (
    <div>
        <div>Hetkel on aktiivne keel: {keel}</div>
        <button onClick={() => muudaKeel("est")}>Eesti keel</button>
        <button onClick={() => muudaKeel("eng")}>English language</button>
        <button onClick={() => muudaKeel("rus")}>Русский язык</button>

        {keel === "est" && <div>Leht on eesti keelne</div>}
        {keel === "eng" && <div>Page is in English</div>}
        {keel === "rus" && <div>Cтpaицa на русском языке</div>}
    </div>
  )
}

export default Seaded