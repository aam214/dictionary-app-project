import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning(props) {
console.log(props.meaning);
return (
  <div className="Meaning">
<h5><em>{props.meaning.partOfSpeech}</em></h5>
{props.meaning.definitions.map(function (definition, index)
{

return (
    <div key={index}>
      <strong>Definition: </strong> {definition.definition}
      
      <br/>
    <strong>Example: </strong> {definition.example}
   
    <Synonyms synonyms={definition.synonyms} />
    </div>
  );
})}
</div>
);
}