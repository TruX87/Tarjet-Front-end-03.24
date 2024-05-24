import React, { useEffect, useState } from 'react'
import config from "../data/config.json";

function HaldaJooke() {
    const [joogid, uuendaJoogid] = useState([]);

    useEffect(() => {
      fetch(config.joogidDbUrl)
      .then(res => res.json())
      .then(json => uuendaJoogid(json || []));
    }, []);


    function kustuta(index) {
        joogid.splice(index,1);
        uuendaJoogid(joogid.slice());
        fetch(config.joogidDbUrl, {"method": "PUT", "body": JSON.stringify(joogid)});
      }

    
  return (
    <div>
        Joogid:
        {joogid.map((jook, index) => 
        <div key={jook.nimi}>
          <span>{jook.nimi}</span>
          <button onClick={() => kustuta(index)}>X</button>
          </div>)}
          
    </div>
  )
}

export default HaldaJooke