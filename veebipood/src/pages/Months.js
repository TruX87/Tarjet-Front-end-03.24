import React, { useState } from 'react'

function Months() {
    const [months, muudaMonths] = useState(['March', 'Jan', 'Feb', 'Dec']);

    const reset = () => {
        muudaMonths(['March', 'Jan', 'Feb', 'Dec']);
    }

    const kustuta = (indeks) => {
      const uuedMonths = months.filter((_, index) => index !== indeks);
      muudaMonths(uuedMonths);
  }

  return (
    <div>
        <div>
        <button className='nuppReset' onClick={reset}>Taasta algasetus</button>
                {months.length !== 0 && (
                    <span className='vastusText'>Kuude koguarv: {months.length} tk</span>
                )}
                {months.length === 0 && (
                    <span className='vastusText'>Kuud puuduvad</span>
                )}
            {months.map((kuud, index) => <div key={index}>{kuud}
            <button onClick={() => kustuta(index)}>x</button>
            </div>)}
        </div>
    </div>
  )
}

export default Months