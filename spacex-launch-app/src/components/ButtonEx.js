// import React, { useEffect, useState } from "react"
// import axios from "axios";
import React from "react";
import { Button, Segment, Icon } from "semantic-ui-react";

function ButtonEx(props) {
  return (
    <div className={"button-box"}>
      <Segment inverted basic>
        <Button
          onClick={props.onClick}
          inverted
          color="orange"
          animated="horizontal"
        >
          <Button.Content hidden>
            <Icon name="space shuttle" />
          </Button.Content>
          <Button.Content visible>Launch!</Button.Content>
        </Button>
      </Segment>
    </div>
  );
}

export default ButtonEx;
