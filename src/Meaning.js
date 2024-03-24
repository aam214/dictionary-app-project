import React from "react";


export default function Meaning(props) {
console.log(props.meaning);
return (
  <div className="Meaning">
<h4>{props.meaning.partOfSpeech}</h4>
{props.meaning.definitions.map(function (definition, index)
{

return (
    <div key={index}>
      <p><strong>
        {definition.definition}</strong>
      </p>
    <p>
      {definition.example}
    </p>
    </div>
  );
})}
</div>
);
}