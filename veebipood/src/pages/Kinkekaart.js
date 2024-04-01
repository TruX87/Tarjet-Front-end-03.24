import React, { useState } from 'react'

function Kinkekaart() {
  const [summa, muudaSumma] = useState(20);
  const [kogus, muudaKogus] = useState(1)
  return (
    <div>
        <button className={summa === 20 ? "summa-aktiivne" : "summa"} onClick={() => muudaSumma(20)}>20</button>
        <button className={summa === 50 ? "summa-aktiivne" : "summa"} onClick={() => muudaSumma(50)}>50</button>
        <button className={summa === 100 ? "summa-aktiivne" : "summa"} onClick={() => muudaSumma(100)}>100</button>

        <div>Kinkekaart {summa} €</div>

        <br /><br />

        <button disabled={kogus === 1} onClick={() => muudaKogus(kogus - 1)}>-</button>
        <span>{kogus}</span>
        <button disabled={kogus === 10} onClick={() => muudaKogus(kogus + 1)}>+</button>

    </div>
  )
}

export default Kinkekaart