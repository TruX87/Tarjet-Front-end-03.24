import React from 'react'
import Yldist from '../components/Yldist'
import Garantiiaeg from '../components/Garantiiaeg'
import GarantiiTeostamine from '../components/GarantiiTeostamine'
import GarantiiEiKuulu from '../components/GarantiiEiKuulu'
import Tarbija from '../components/Tarbija'
import Defekt from '../components/Defekt'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";



function Arikliendile() {
  gsap.registerPlugin(useGSAP,ScrollToPlugin);

 
  
  return (
    <div>
       <h1>Garantii tingimused</h1> 
       <br />
<h3>GARANTII TINGIMUSED:</h3>
<br />
Salvesta .pdf kujul siit
<br />
<button onClick={() => gsap.scrollTo("#4") }>4.peatükk</button>
<Yldist />
<br />
<br />
<Garantiiaeg />
<br />
<br />
<GarantiiTeostamine />
<br />
<br />
<GarantiiEiKuulu id="4"/>
<br />
<br />
<Tarbija />
<br />
<br />
<Defekt />
<br />
<br />
NB! Arvutitark OÜ ei kohustu tagasi ostma või ümber vahetama töökorras tooteid, mille klient on ostnud kauplusest kohapealt. Konkreetse toote tagastamise või vahetamise võimaluse ja tingimused otsustab garantiiosakond.
<br />
<br />
Juhul kui garantiiremonti toodud seadmel ei leita valmistamisprotsessist või kasutatud materjalidest põhjustatud viga, võidakse töö tellijalt nõuda remonditellimuse käsitlustasu kuni €36.-. Esimese kuue kuu jooksul tarbijale tasu ei rakendata.
    </div>
  )
}

export default Arikliendile

// Võiks välja failist 100% tõsta, kui üle 200 rea
// Võiks mõelda välja tõstmise peale, kui on üle 150 rea