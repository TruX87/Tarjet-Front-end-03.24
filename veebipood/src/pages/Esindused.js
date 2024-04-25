import React, { useState } from 'react'

function Esindused() {
    const [linn, muudaLinn] = useState("Tallinn");  // React teeb nii, tema vahetab olekuid
    // let linn = "Tallinn";   tavaline JavaScript teeb nii
    const [keskused, muudaKeskused] = useState(["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);

  // Keskuste koguarv
  // 1. Sorteeri A-Z
  // 2. Sorteeri Z-A
  // 3. Sorteeri tähtede arv kasvavalt
  // 4. Sorteeri tähtede arv kahanevalt
  // 5. Sorteeri kolmas täht A-Z

  // 1. Filtreeri kellel on täpselt 9 tähte
  // 2. Filtreeri kellel on vähemalt 7 tähte
  // 3. Filtreeri kellel on lühend "is"
  // 4. Filtreeri kellel on kolmas täht "i"
  // 5. Filtreeri kes lõppeb "e" tähega

  //HALDA failist otse
  // 1. Tühjenda
  // 2. Võimalda teda ajutiliselt kustutada
  // 3. Võimalda teda lõppu juurde lisada
  return (
    <div>
        <div>Hetkel aktiivne linn: {linn}</div>
        <button className={linn === "Tallinn" ? "linn-aktiivne" : 'linn'} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
        <button className={linn === "Tartu" ? "linn-aktiivne" : 'linn'} onClick={() => muudaLinn("Tartu")}>Tartu</button>
        <button className={linn === "Pärnu" ? "linn-aktiivne" : 'linn'} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>
        <button className={linn === "Narva" ? "linn-aktiivne" : 'linn'} onClick={() => muudaLinn("Narva")}>Narva</button>

        {/* <button onClick={() => {linn = "Tallinn"}}>Tallinn</button>
        <button onClick={() => {linn = "Tartu"}}>Tartu</button>
        <button onClick={() => {linn = "Pärnu"}}>Pärnu</button>
        <button onClick={() => {linn = "Narva"}}>Narva</button> */}

       {linn === "Tallinn" &&  
          <div>
            <button>Sorteeri A-Z</button>
            {keskused.map(keskus => <div key={keskus}>{keskus}</div> )}
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