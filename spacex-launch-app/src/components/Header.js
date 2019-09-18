import React from "react"
import { Header, Segment, Icon } from 'semantic-ui-react'
import "../App.css";

function HeaderEx() {
    return (
        <div className = "App-header">
            <Segment inverted>
            <Header as='h1' icon>
            <Icon name='rocket' />
            SpaceX Launch App
             </Header>
            </Segment>
        </div>
    )
}

export default HeaderEx;