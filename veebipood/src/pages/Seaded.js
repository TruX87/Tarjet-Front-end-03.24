import React, { useState } from 'react'

function Seaded() {
    const [keel, muudaKeel] = useState("est");

  return (
    <div>
        <div>Hetkel on aktiivne keel: {keel}</div>
        <button className={keel === "est" ? "keel-aktiivne" : "keel"} onClick={() => muudaKeel("est")}>Eesti keel</button>
        <button className={keel === "eng" ? "keel-aktiivne" : "keel"} onClick={() => muudaKeel("eng")}>English language</button>
        <button className={keel === "rus" ? "keel-aktiivne" : "keel"} onClick={() => muudaKeel("rus")}>Русский язык</button>

        {keel === "est" && <div className="teade">Leht on eesti keelne</div>}
        {keel === "eng" && <div className="teade">Page is in English</div>}
        {keel === "rus" && <div className="teade">Cтpaицa на русском языке</div>}
    </div>
  )
}

export default Seaded