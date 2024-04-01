
import React from "react";
import Dictionary from "./Dictionary"
import './App.css';



export default function App() {
  return (
    <div className="App">
      <header>
      

      <h1 className="text-center">My Dictionary</h1>
      </header>
  <Dictionary defaultPossibleWord="Peace"/>
  <footer className="text-center">
    Designed by Ariana Morin open-sourced on <a href="https://github.com/aam214/dictionary-app-project">{""}GitHub</a> and viewed on <a href="https://dictionary-app-discover-learn.netlify.app/">{""}Netlify</a>.
    </footer>  
    </div>
  );
}
