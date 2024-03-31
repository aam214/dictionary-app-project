import React from "react";

export default function Photos(props){
  if (props.photos) {

  return (
  <section>
    <div className="Photos">
    {props.photos.map(function (photo, index) {
      return <img src={photo.src.small} alt="Search Images" className="img-fluid" key={index} />;
  })}
  </div> 
 </section>
 );

} else {
  return null;
}
}
