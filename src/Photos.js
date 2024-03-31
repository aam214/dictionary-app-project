import React from "react";

export default function Photos(props){
  if (props.photos) {

  return (
  <section>
    <div className="Photos" >
    {props.photos.map(function (photo, index) {
      return(
      <div className="text-center" key={index}>
      <a href={photo.src.original} target="_blank" rel="noopener noreferrer" title="Original Images">
      <img src={photo.src.medium} alt="Search Images" className="img-fluid"/>
      </a>
      </div>
      );
  })}
  </div> 
 </section>
 );
} else {
  return null;
}
}
