import React from 'react'

function Card({picUrl, headerText, contentText, buttonText}) {
  return (
    <div className='Card'>
        <h2>{headerText}</h2>
        <p>{contentText}</p>
        <button>{buttonText}</button>
    </div>
  )
}

export default Card