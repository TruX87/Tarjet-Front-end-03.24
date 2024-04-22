import React from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  // ["Coca","Fanta","Sprite","Red bull"]

  //Koguarv
  // tühjendamise nupp
  // kui ostukorv tühi, siis alles kuvab ,,Ostukorv on tühi''
  return (
    <div>
        <div>Ostukorv on tühi!</div>
        <Link to="/avaleht">Mine avalehele</Link>
    </div>
  )
}

export default Ostukorv