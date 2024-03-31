import React from "react";

export default function Photos(props){
  if (props.photos) {
    console.log(props.photos);
  return (
  <container> 
    {props.photos.map(function (photo, index) {
      return <img src={photo.src.small} alt="Search Images" key={index} />;
  })}
 </container>
 );

} else {
  return null;
}
}
