import React from "react";
import "../App.css";

function PhotoBox(props) {
  if (!props.data) return <span></span>;
  return (
    <>
      <div className="photo-box">
        {/* {console.log(props)} */}
        {props.data.links.flickr_images.map(url => {
          return (
            <img
              src={url}
              className="Image"
              alt="SpaceXPhoto"
              key={Math.random()}
            ></img>
          );
        })}
      </div>
    </>
  );
}

export default PhotoBox;
