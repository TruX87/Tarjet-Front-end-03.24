import React from 'react'
import '../../css/NotFound.css'
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className='background'>
            <img className='notFound-image' src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*DeBkx8vjbumpCO-ZkPE9Cw.png" alt='404 error'/>
            {/* <img src="https://i.imgur.com/qIufhof.png" /> */}
            <div>
            <Link to="/">
              <button className='home-button'>Go to homepage</button>
            </Link>
            </div>
        </div >
    )
}

export default NotFound