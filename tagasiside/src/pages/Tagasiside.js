import React, { useState } from 'react'

function Tagasiside() {
    const [tagasisided, määraTagasisided] = useState(["Väga hea","Hea","Rahuldav","Halb"])
  
    return (
    <div>Tagasisided:
        {tagasisided.map(t => <div>{t}</div>)}
    </div>
  )
}

export default Tagasiside