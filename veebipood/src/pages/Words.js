import React, { useState } from 'react'

function Words() {
  const [words, muudaWords] = useState(['spray', 'elite', 'exuberant', 'destruction', 'present']);

  const reset = () => {
    muudaWords(['spray', 'elite', 'exuberant', 'destruction', 'present']);
}

const kustuta = (indeks) => {
  const uuedWords = words.filter((_, index) => index !== indeks);
  muudaWords(uuedWords);
}

  return (
    <div>
        <div>
            <button className='nuppReset' onClick={reset}>Taasta algasetus</button>
            {words.length !== 0 && (
                    <span className='vastusText'>Sõnade koguarv: {words.length} tk</span>
                )}
                {words.length === 0 && (
                    <span className='vastusText'>Sõnad puuduvad</span>
                )}
            {words.map((sonad, index) => <div key={index}>{sonad}
            <button onClick={() => kustuta(index)}>x</button>
            </div>)}
        </div>
    </div>
  )
}

export default Words