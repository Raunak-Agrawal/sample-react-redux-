import { TEST_DISPATCH } from "./types";
import { DETAIL_DISPATCH } from "./types";
import axios from "axios";

export const eventListing = userData => dispatch => {
  //   return {
  //     type: TEST_DISPATCH,
  //     payload: userData
  //   };
  axios
    .post("https://api.kloh.in/kloh/external/v1/activity/list", userData)
    .then(res =>
      dispatch({
        type: TEST_DISPATCH,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const eventDetail = activityId => dispatch => {
  axios
    .get(`https://api.kloh.in/kloh/external/v1/activity/${activityId}`)
    .then(res =>
      dispatch({
        type: DETAIL_DISPATCH,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
