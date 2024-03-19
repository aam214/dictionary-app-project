import React, { useState } from "react";
import "./Dictionary.css"


export default function Dictionary(){
  let [possibleWord, setPossibleWord]= useState("");
  
  function search(event){
    event.preventDefault();
    alert(`Searching for ${possibleWord}`)
  }
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