import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"


// Navigeerimiseks (URLi vahetuseks):
// 1. installida uus moodul: "npm install react-router-dom"
// 2. Võtta "react-router-dom" seest importida BrowserRouter
// 3. BrowserRouteriga ümbritseda <App /> tag
// 4. App.js sees teeme seoseid URLi ja HTMLi vahel

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

