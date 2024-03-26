import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results"

export default function Dictionary(props){
  let [possibleWord, setPossibleWord]= useState(props.defaultPossibleWord);
  let [results, setResults]=useState(null);
  let [loaded, setLoaded]= useState(false);


function handleResponse(response)  {
setResults(response.data[0]);
}


  function search(){
   
 let apiUrl=
  `https://api.dictionaryapi.dev/api/v2/entries/en/${possibleWord}`;
  axios.get(apiUrl).then(handleResponse);
}
function handleSubmit(event){
  event.preventDefault();
  search();
}
  function handlePossibleWordChange(event){
    setPossibleWord(event.target.value);

  }
function load(){
setLoaded(true);
search();
}


if (loaded){
  return(
    <div className="Dictionary">
      <section className="search">
      <form onSubmit={handleSubmit}>
        <input type="search"   autoFocus={true} onChange={handlePossibleWordChange} className="search-engine"/>
        <input type="submit" value="Search" className="submit" />
      </form>
      </section>
    <Results results={results}/>
    </div>
  );

} else {
  load();
  return "Loading";
}}