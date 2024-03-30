import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
      <section> 
      
        {props.synonyms.map(function (synonym, index) {
          return <p key={index}>{synonym}</p>;
        })}
        
      </section>
      </div>
    );
  } else {
    return null;
  }
}
