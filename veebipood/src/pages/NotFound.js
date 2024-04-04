import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <h1>ERROR 404</h1>
        <h3>Lehte ei leitud!</h3>
        <Link to="/avaleht">Mine avalehele</Link>
    </div>
  )
}

export default NotFound