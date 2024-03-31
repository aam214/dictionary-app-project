import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props){
  let [possibleWord, setPossibleWord]= useState(props.defaultPossibleWord);
  let [results, setResults]=useState(null);
  let [loaded, setLoaded]= useState(false);
let [photos, setPhotos]= useState(null);

function handleResponse(response)  {
setResults(response.data[0]);
}
function handlePexelsResponse(response){
setPhotos(response.data.photos);
}

  function search(){
   
 let apiUrl=
 `https://api.dictionaryapi.dev/api/v2/entries/en/${possibleWord}`;
  axios.get(apiUrl).then(handleResponse);



let pexelsApiKey =
"joV9aUExOG5ptGmDnhOUuUU3WJMekUXpp0AyoyjAKvtS58SZZJ9eNQSc";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${possibleWord}&per_page=8`;
let headers = { Authorization: `${pexelsApiKey}` };
axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
    
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a word..."  autoFocus={true} onChange={handlePossibleWordChange} className="search-engine"/>
        <input type="submit" value="Search" className="submit" />
      </form>
 
    <Results results={results}/>
    <Photos photos={photos}/>
    </div>
  );

} else {
  load();
  return <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
}}