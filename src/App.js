import logo from "./logo.png";
import React from "react";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} width="200"className="rounded img-thumbnail" alt="logo"/>
      </header>
  
  <footer>
    Designed by Ariana Morin open-sourced on GitHub and viewed on Netlify.
    </footer>  
    </div>
  );
}
