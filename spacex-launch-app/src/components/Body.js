import React, { useEffect, useState } from "react"
import PhotoBox from "./PhotoBox";
import TextBox from "./TextBox"
import ButtonEx from "./ButtonEx";

import { connect } from "react-redux";
import { getData } from "../actions";

import "../App.css";

function Body(props) {
    // const [nasaData, setNasaData] = useState([]);
    // const [date, setDate] = useState("Loading...");

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    // useEffect(() => {
    //     axios
    //     .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`) // Public API
    //       .then(response => {
    //         setNasaData(response.data)
    //         console.log(response.data)
    //       })
    //   }, [date]);
    const getData = () => {
      props.getData();
    }

    return (
        <div className = "Body">
          {/* <ButtonEx onClick={() => setDate(today)}/> */}
          <ButtonEx onClick={() => getData()}/>
           {/* <button className="button" onClick={() => setDate(today)}>Click to show Photo</button> */}
          {/* <PhotoBox imgUrl={nasaData.hdurl}/>
          <TextBox title={nasaData.title} date={date} explanation=        {nasaData.explanation} /> */}
        </div>
    )
}

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(Body);
