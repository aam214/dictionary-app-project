import logo from "./logo.png";
import React from "react";
import Dictionary from "./Dictionary"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} width="200"className="rounded img-thumbnail" alt="logo"/>
      </header>
      <h1>My Dictionary</h1>
  <Dictionary/>
  <footer className="text-center">
    Designed by Ariana Morin open-sourced on <a href="https://github.com/aam214/dictionary-app-project">{""}GitHub</a> and viewed on <a href="https://dictionary-app-discover-learn.netlify.app/">{""}Netlify</a>.
    </footer>  
    </div>
  );
}
