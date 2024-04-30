import React, { useState } from 'react'
import joogidFailist from "../joogid.json"

function HaldaJooke() {
    const [joogid, uuendaJoogid] = useState(joogidFailist);


    function kustuta(index) {
        joogidFailist.splice(index,1);
        uuendaJoogid(joogidFailist.slice());
      }

    
  return (
    <div>
        Joogid:
        {joogid.map((jook, index) => 
        <div>
          <span>{jook}</span>
          <button onClick={() => kustuta(index)}>X</button>
          </div>)}
          
    </div>
  )
}

export default HaldaJooke