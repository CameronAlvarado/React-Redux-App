import React from "react"
import { Segment } from 'semantic-ui-react'

import "../App.css";

function TextBox({ data }) {
    if (!data) return <h2>3... 2... 1...</h2>
    return (
        <div>
            <img src={data.links.mission_patch_small}></img>
            <div className = "TextBox">
                <Segment.Group basic>
                    <Segment basic>
                        <h2>Mission: {data.mission_name}</h2>
                    </Segment>
                    <Segment basic>
                        <h3>Rocket: {data.rocket.rocket_name}</h3>
                    </Segment>
                    <Segment basic>
                        <h4>{data.launch_date_local}</h4>
                    </Segment>
                    <Segment basic>
                        <p>{data.details}</p>
                    </Segment>
                </Segment.Group>
            </div>
        </div>
    )
}

export default TextBox;