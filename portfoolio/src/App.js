import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';

function App() {
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
<br /><br />
      <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/Bethf37Hv_Q?si=8kiSlQlH1EYAhypp&amp;start=82" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <Routes>
        <Route path="work" element={<Work />} />
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="courses" element={<Courses />} />
      </Routes>

      <a className='facebook-button' href="https://www.facebook.com/profile.php?id=61555789865280">
        <img src="/facebook.png" alt="" />
        <span>Facebook</span>
      </a>
      <a className='linkedin-button' href="https://www.linkedin.com/company/maitar-solutions">
        <img src="/linkedin.png" alt="" />
        <span>LinkedIn</span>
      </a>
      <a className='homepage-button' href="https://maitar.ee">
        <img src="/homepage.png" alt="" />
        <span>Koduleht</span>
      </a>
    </div>
  );
}

export default App;
