import React from "react"
import "../App.css";
import { Image } from 'semantic-ui-react'

function PhotoBox(props) {
    if (!props.data) return <span></span>
    return (
        <>
        {props.data.links.youtube_id != null ? 
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.data.links.youtube_id}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null}

            <div className = "photo-box">
                {/* {console.log(props)} */}
                {props.data.links.flickr_images.map( url => {
                    return <img src={url} className="Image" alt="SpaceXPhoto" key={Math.random()} ></img>
                })}
            </div>
        </>
    )
}

export default PhotoBox;