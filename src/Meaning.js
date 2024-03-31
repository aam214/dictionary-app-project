import React from "react";
import Synonyms from "./Synonyms";
import './Results.css';

export default function Meaning(props) {

return (
<div className="Meaning">
<h4> <em>{props.meaning.partOfSpeech}</em></h4>
{props.meaning.definitions.map(function (definition, index){ 
return (
      <div key={index}>
      <div className="Def">
                {definition.definition}</div><br/>
                <div className="examples">{definition.example}</div>
           <Synonyms synonyms={definition.synonyms}/>
                    </div>);
        })}
      </div>
    );
  }