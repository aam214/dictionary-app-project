import React from "react";

export default function Phonetic(props){

  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
      <i className="fa-solid fa-volume-high"></i>  </a>
      
        <strong>{props.phonetic.text}</strong>
    </div>
  )
}