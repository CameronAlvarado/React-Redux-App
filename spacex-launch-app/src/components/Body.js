import React, { useEffect, useState } from "react"
import PhotoBox from "./PhotoBox";
import TextBox from "./TextBox"
import ButtonEx from "./ButtonEx";

import { connect } from "react-redux";
import { getData } from "../actions";

import "../App.css";

function Body({ getData, data, isFetching, error }) {

    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();

    // today = yyyy + '-' + mm + '-' + dd;

    return (
        <div className = "Body">
          {/* <ButtonEx onClick={() => setDate(today)}/> */}
          <ButtonEx onClick={getData}/>
          <TextBox data={data} />
          <br></br>
          <PhotoBox data={data} />
        </div>
    )
}

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(Body);
