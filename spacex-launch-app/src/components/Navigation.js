import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import ButtonEx from "./ButtonEx.js";

const Navigation = () => {
  return (
    <div className="nav">
      <Button.Group>
        <Button color="grey">
          <Link to="/">
            {/* <div className="nav-links"> */}
            Hide Video
            {/* </div> */}
          </Link>
        </Button>
        <Button.Or />
        <Button color="orange">
          <Link to="/youtube" id="youtube">
            {/* <div className="nav-links"> */}
            Show Video
            {/* </div> */}
          </Link>
        </Button>
      </Button.Group>
    </div>
  );
};

export default Navigation;
