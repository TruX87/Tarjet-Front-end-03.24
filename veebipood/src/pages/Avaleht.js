import React, {useState} from 'react'

function Avaleht() {
  const [kogus, muudaKogus] = useState(0);  // saab kokku liita, lahutada, korrutada, jagada
  const [sonum, muudaSonum] = useState(""); // sõnadel saab vaadata mis on esimene, teine,
  // kolmas, kas sisaldab, kas on suur või väike
  const [laigitud, muudaLaigitud] = useState(false); // saab tagurpidi keerata -> ! abil

  function nulli() {
    muudaKogus(0)
    muudaSonum("Nullisid koguse!")
  }

  function vähenda() {
    muudaKogus(kogus - 1)
    muudaSonum("Vähendasid kogust!")
  }

  function suurenda() {
    muudaKogus(kogus + 1)
    muudaSonum("Suurendasid kogust!")
  }

  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mitte-laigitud.svg" alt="" />}
      <button onClick={() => muudaLaigitud(!laigitud)}>Muuda like-i</button>
        <div>{sonum}</div>
        {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
        <button disabled={kogus === 0} onClick={vähenda}>-</button>
        <span>{kogus}</span>
        <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht