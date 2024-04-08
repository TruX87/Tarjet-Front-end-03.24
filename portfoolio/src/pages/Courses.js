import {useState, React} from 'react'
import {Link} from 'react-router-dom';

function Courses() {
  const [kursus, uuendaKursus] = useState("Valimata");

  return (
    <div className='courses'>
        <Link to="/">
          <button>Tagasi</button>
        </Link>
        <button className={kursus === "udemy" ? "udemy-aktiivne" : "udemy-mitteaktiivne"} onClick={() => uuendaKursus("udemy")}>Udemy</button>
        <button className={kursus === "coursera" ? "coursera-aktiivne" : "coursera-mitteaktiivne"} onClick={() => uuendaKursus("coursera")}>Coursera</button>
        <button className={kursus === "codecademy" ? "codecademy-aktiivne" : "codecademy-mitteaktiivne"} onClick={() => uuendaKursus("codecademy")}>Codecademy</button>
        <button className={kursus === "udacity" ? "udacity-aktiivne" : "udacity-mitteaktiivne"} onClick={() => uuendaKursus("udacity")}>Udacity</button>
        {kursus === "udemy" && <div>Siin on kirjeldus (loend) Udemy.com läbitud kursustest</div>}
        {kursus === "coursera" && <div>Siin on kirjeldus (loend) Coursera.com läbitud kursustest</div>}
        {kursus === "codecademy" && <div>Siin on kirjeldus (loend) Codecademy.com läbitud kursustest</div>}
        {kursus === "udacity" && <div>Siin on kirjeldus (loend) Udacity.com läbitud kursustest</div>}
    </div>
  )
}

export default Courses