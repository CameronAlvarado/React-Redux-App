import React from "react";
import "../App.css";

import { connect } from "react-redux";
import { getData } from "../actions";

function YoutubeBox({ data }) {
  var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  console.log(data);
  return (
    <>
      {data !== null ? (
        <div className="video">
          <iframe
            title="youtube"
            width={w < 500 ? "375" : "560"}
            height={w < 500 ? "210.9375" : "315"}
            src={`https://www.youtube.com/embed/${data.links.youtube_id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <h3>No video available</h3>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(YoutubeBox);
