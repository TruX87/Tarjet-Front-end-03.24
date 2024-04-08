import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='App'>
      <Link to="/">
      <img className='main-picture' src="https://t4.ftcdn.net/jpg/02/18/18/55/360_F_218185587_P4zituDtWJOfClUKL6merI0BgLMIxoeC.jpg" alt="" />
      </Link>
      <h1>Tere, olen Tarjet ja asute hetkel minu portfoolios</h1>
      <div className='rectangle'></div>

      <div className='navigation-pictures'>
        <Link className='main-link' to="work">
          <img src="https://t3.ftcdn.net/jpg/03/45/29/56/360_F_345295622_gUzV6dU09syTrk49uSabBvhaEDBlJeFp.jpg" alt="" />
          <p>Tööde lehele</p>
        </Link>
        <Link className='main-link' to="hobbies">
          <img src="https://www.henryharvin.com/blog/wp-content/uploads/2020/06/Online-courses-1000x600-1.jpg" alt="" />
          <p>Hobide lehele</p>
        </Link>
        <Link className='main-link' to="courses">
          <img src="https://www.shutterstock.com/image-photo/training-courses-business-concept-stack-260nw-549736798.jpg" alt="" />
          <p>Kursuste lehele</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar