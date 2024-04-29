import React, { useState } from 'react'

function Animals() {
  const [animals, muudaAnimals] = useState(['pigs', 'goats', 'sheep']);

  const reset = () => {
    muudaAnimals(['pigs', 'goats', 'sheep']);
}

const kustuta = (indeks) => {
  const uuedAnimals = animals.filter((_, index) => index !== indeks);
  muudaAnimals(uuedAnimals);
}

  return (
    <div>
        <div>
            <button className='nuppReset' onClick={reset}>Taasta algasetus</button>
            {animals.length !== 0 && (
                    <span className='vastusText'>Loomade koguarv: {animals.length} tk</span>
                )}
                {animals.length === 0 && (
                    <span className='vastusText'>Loomad puuduvad</span>
                )}
            {animals.map((loomad, index) => <div key={index}>{loomad}
            <button onClick={() => kustuta(index)}>x</button>
            </div>)}
        </div>
    </div>
  )
}

export default Animals