import './App.css';
import { Link, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <button className="nupp">Roheline nupp</button>
      <div className="text1">Sinine tekst</div>
      <div className="text2">Roheline tekst</div>
      <img className="pilt" src="https://www.saarevolley.ee/wp-content/uploads/2018/02/Netist-pilt-pallid-199x120x3.jpg" alt="pallid" />
      <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
    <iframe title="video" width="420" height="315"
    src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>
    </div>
  );
}

export default App;
