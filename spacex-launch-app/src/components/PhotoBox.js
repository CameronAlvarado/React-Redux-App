import React from "react"
import "../App.css";

function PhotoBox(props) {
    if (!props.imgUrl) return <h3>Loading...</h3>
    return (
        <div className = "PhotoBox">
            {/* {console.log(props)} */}
            <img class="ui fluid image" src={props.imgUrl} alt="APOD"></img>
        </div>
    )
}

export default PhotoBox;