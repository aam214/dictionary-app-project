import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results"

export default function Dictionary(){
  let [possibleWord, setPossibleWord]= useState("");
  let [results, setResults]=useState(null);


function handleResponse(response)  {
setResults(response.data[0]);
}
  function search(event){
    event.preventDefault();
   
 let apiUrl=
  `https://api.dictionaryapi.dev/api/v2/entries/en/${possibleWord}`;

  axios.get(apiUrl).then(handleResponse);

}
  function handlePossibleWordChange(event){
    setPossibleWord(event.target.value);

  }


  return(
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" value="Type a word..."  onChange={handlePossibleWordChange}/>
        <input type="submit" value="Search" className="submit" />
      </form>
    <Results results={results}/>
    </div>
  );

}