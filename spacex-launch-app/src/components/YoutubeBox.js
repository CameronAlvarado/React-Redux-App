import React from "react";
import "../App.css";

import { connect } from "react-redux";
import { getData } from "../actions";

import ButtonEx from "./ButtonEx.js";

function YoutubeBox({ getData, data }) {
  return (
    <>
      {/* <ButtonEx onClick={getData} /> */}
      {data ? (
        <div className="video">
          <iframe
            title="youtube"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${data.links.youtube_id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <h2>Click button for new mission</h2>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData })(YoutubeBox);
