import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary(){
  let [possibleWord, setPossibleWord]= useState("");
  
  function search(event){
    event.preventDefault();
    alert(`Searching for ${possibleWord}`)
  }
  
 let apiUrl=
  "https://api.shecodes.io/dictionary/v1/define?word=book&key=8d9c6f00c08bcb1a3bo8fd87a4d1b4t6";
 axios.get(apiUrl).then(handleResponse);
 
  function handlePossibleWordChange(event){
    setPossibleWord(event.target.value);

  }


  return(
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handlePossibleWordChange}/>
        <input type="submit" value="Search" />
      </form>
    </div>
  );

}