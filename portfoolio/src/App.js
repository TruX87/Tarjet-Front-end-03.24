import { Route, Routes } from 'react-router-dom';
import './App.css';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>

      <Routes>
        <Route path="" element={<Navbar />} />
        <Route path="work" element={<Work />} />
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="courses" element={<Courses />} />
      </Routes>

      <br /><br />
      <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/Bethf37Hv_Q?si=8kiSlQlH1EYAhypp&amp;start=82" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

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
