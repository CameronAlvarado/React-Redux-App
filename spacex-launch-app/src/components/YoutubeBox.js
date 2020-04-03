import React from "react";
import "../App.css";

import { connect } from "react-redux";
import { getData } from "../actions";

function YoutubeBox({ data }) {
  //   if (!data) {
  //     return <h3>WAIT</h3>;
  //   } else {
  console.log(data);
  return (
    <>
      {/* <ButtonEx onClick={getData} /> */}
      {data !== null ? (
        <div className="video">
          <iframe
            title="youtube"
            width="500"
            height="300"
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

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData })(YoutubeBox);
