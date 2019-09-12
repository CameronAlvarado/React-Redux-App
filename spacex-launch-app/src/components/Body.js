import React, { useEffect, useState } from "react"
import PhotoBox from "./PhotoBox";
import TextBox from "./TextBox"
import ButtonEx from "./ButtonEx";

import { connect } from "react-redux";
import { getData } from "../actions";

import "../App.css";

function Body({ getData, data, isFetching, error }) {
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
    // const [newData, setNewData] = useState({ links: { flickr_images: [] }}); 

    // useEffect(() => {
    //   // run action creator when the component mounts
    //   getData();
    // }, [getData]);
  
    if (isFetching) {
      return <h3>Fetching data for ya!</h3>;
    }

    const getDataButton = () => {
      getData()
    }

    console.log(data);

    return (
        <div className = "Body">
          {/* <ButtonEx onClick={() => setDate(today)}/> */}
          <ButtonEx onClick={getDataButton}/>
          <PhotoBox imgArr={data}/> {/* <--- major blocker */}
          {/* <TextBox title={nasaData.title} date={date} explanation=        {nasaData.explanation} /> */}
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
