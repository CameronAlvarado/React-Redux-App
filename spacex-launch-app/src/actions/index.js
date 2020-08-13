import axios from "axios";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

// this action makes the API call
export const getData = () => (dispatch) => {
  dispatch({ type: FETCHING_DATA_START });
  axios
    .get(
      `https://api.spacexdata.com/v3/launches/${Math.floor(
        Math.random() * 114
      )}`
    )
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCHING_DATA_FAILURE, payload: console.log(err) });
    });
};
