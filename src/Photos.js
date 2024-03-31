import React from "react";

export default function Photos(props){
  if (props.photos) {

  return (
  <section>
    <div className="Photos">
    {props.photos.map(function (photo, index) {
      return <a href={photo.src.original} target="_blank" title="Original Images">
      <img src={photo.src.small} alt="Search Images" className="img-fluid" key={index} />
      </a>;
  })}
  </div> 
 </section>
 );

} else {
  return null;
}
}
