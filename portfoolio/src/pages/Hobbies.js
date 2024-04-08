import React from 'react'
import {Link} from 'react-router-dom';

function Hobbies() {
  return (
    <div className='hobbies'>
        <Link to="/"><button>Tagasi</button></Link>
        <div>Hobide sisu</div>
    </div>
  )
}

export default Hobbies