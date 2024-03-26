import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
