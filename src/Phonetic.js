import React from "react";

export default function Phonetic(props){
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
     
      <br/>
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
      <i class="fa-solid fa-volume-high"></i>  </a>
      
        <strong>{props.phonetic.text}</strong>
    </div>
  )
}