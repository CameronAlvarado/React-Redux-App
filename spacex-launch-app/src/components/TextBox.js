import React from "react"
import { Segment } from 'semantic-ui-react'

import "../App.css";

function TextBox(props) {
    return (
        <div className = "TextBox">
            <Segment.Group basic>
                <Segment inverted color='#1b1c1d' basic>
                    <h3>{props.title}</h3>
                </Segment>
                <Segment inverted color='#1b1c1d' basic>
                    <h4>{props.date}</h4>
                </Segment>
                <Segment inverted color='#1b1c1d'>
                    <p>{props.explanation}</p>
                </Segment>
            </Segment.Group>
        </div>
    )
}

export default TextBox;