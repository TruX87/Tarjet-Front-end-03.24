import React from 'react'
import { useState } from 'react'

function Meist() {
  const [kontakt, n2itaKontakt] = useState("")
  return (
    <div>
        <div>Meist, siin olev info on nähtav localhost:3000/meist aadressil</div>
        <div>Meie töötajad:</div>
        <br />
        <div>Arvo Pärt</div>
        <div>Uudisklippide taustamuusika</div>
        <button onClick={() => n2itaKontakt("+3727897897")}>Võta ühendust</button>
        <br /><br />
        <div>Kelly Sildaru</div>
        <div>Püstolreporter</div>
        <button onClick={() => n2itaKontakt("+3724564564")}>Võta ühendust</button>
        <br /><br />
        <div>Edward von Lõngus</div>
        <div>Uudiste kujundamine</div>
        <button onClick={() => n2itaKontakt("+3726546546")}>Võta ühendust</button>
        <br /><br />
        <div>Kerli Kõiv</div>
        <div>Välisturgude spetsialist</div>
        <button onClick={() => n2itaKontakt("+3729879879")}>Võta ühendust</button>
        <br /><br />
        { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div>
  )
}

export default Meist