import React, { useState } from 'react'

function Avaleht() {
    const tegelased = [
        {eesnimi: "Mickey", perenimi: "Mouse", elukoht: "Disneyland"},
        {eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland"},
        {eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundred Acre Wood"},
        {eesnimi: "Roo", perenimi: "Kangaroo", elukoht: "Hundred Acre Wood"},
        {eesnimi: "Scooby", perenimi: "Doo", elukoht: "Crystal Cove"}
    ]
    const [klikitudNimi, uuendaKlikitudNimi] = useState("");

    const kuvaNimi = (tegelane) => {
        // console.log(tegelane.eesnimi);
        uuendaKlikitudNimi(tegelane.eesnimi);
    }
  return (
    <div>
        {klikitudNimi !== "" && <div>Klikkisid tegelase {klikitudNimi} peal</div>}
        {tegelased.map(tegelane =>
        <div>
            <div>{tegelane.eesnimi}</div>
            <div>{tegelane.perenimi}</div>
            <div>{tegelane.elukoht}</div>
            <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>
        </div>)}
        {/* <div>
            <div>Mickey</div>
            <div>Mouse</div>
            <div>Disneyland</div>
        </div>
        <br />
        <div>
            <div>Minnie</div>
            <div>Mouse</div>
            <div>Disneyland</div>
        </div>
        <br />
        <div>
            <div>Winnie</div>
            <div>Pooh</div>
            <div>Hundred Acre Wood</div>
        </div>
        <br />
        <div>
            <div>Roo</div>
            <div>Kangaroo</div>
            <div>Hundred Acre Wood</div>
        </div> */}
    </div>
  )
}

export default Avaleht