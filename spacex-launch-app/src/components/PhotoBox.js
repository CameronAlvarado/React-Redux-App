import React from "react"
import "../App.css";
import { Image } from 'semantic-ui-react'

function PhotoBox(props) {
    if (!props.data) return <h3>3... 2... 1...</h3>
    return (
        <div className = "photo-box">
            {console.log(props)}
            {props.data.links.flickr_images.map( url => {
                return <img src={url} alt="SpaceXPhoto" key={Math.random()} ></img>
            })}
            
        </div>
    )
}

export default PhotoBox;