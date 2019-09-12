import React from "react"
import "../App.css";

function PhotoBox(props) {
    if (!props.imgArr) return <h3>3... 2... 1...</h3>
    return (
        <div className = "PhotoBox">
            {console.log(props)}
            {props.imgArr.links.flickr_images.map( url => {
                return <img class="ui fluid image" src={url} alt="APOD"></img>
            })}
            
        </div>
    )
}

export default PhotoBox;