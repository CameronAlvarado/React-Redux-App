import React from "react";
import PhotoBox from "./PhotoBox";
import TextBox from "./TextBox";
import ButtonEx from "./ButtonEx";

import { connect } from "react-redux";
import { getData } from "../actions";

import "../App.css";

function Body({ getData, data, isFetching, error }) {
  return (
    <div className="Body">
      <ButtonEx getData={getData} />
      <TextBox data={data} />
      <br></br>
      <PhotoBox data={data} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(Body);

// commit
