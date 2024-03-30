import React from "react";

export default function Phonetic(props){

  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
      <i className="fa-solid fa-volume-high"></i>  </a>
       <span className="pronunciation"><strong>{props.phonetic.text}</strong></span>
    </div>
  )
}