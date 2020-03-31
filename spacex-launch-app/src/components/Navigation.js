import React from "react";
import { Link } from "react-router-dom";

import ButtonEx from "./ButtonEx.js";

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="nav-links">
          <h3>Main Info</h3>
        </div>
      </Link>

      <Link to="/youtube">
        <div className="nav-links">
          <h3>Youtube Media</h3>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
