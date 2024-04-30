import React, { useState } from 'react'
import joogidFailist from "../joogid.json";

function Avaleht() {
    const [joogid, uuendaJoogid] = useState(joogidFailist);

  return (
    <div>
        Joogid:
        {joogid.map(jook => 
        <div>
          <span>{jook}</span>
          </div>)}
    </div>
  )
}

export default Avaleht