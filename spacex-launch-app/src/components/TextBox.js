import React from "react";
import { Segment } from "semantic-ui-react";

import "../App.css";

function TextBox({ data }) {
  if (!data)
    return <h3>Click the button above to load a new Space X launch.</h3>;
  return (
    <div>
      {data.links.mission_patch_small != null ? (
        <img src={data.links.mission_patch_small} alt="Space X mission badge" />
      ) : null}

      <div className="TextBox">
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
  );
}

export default TextBox;
