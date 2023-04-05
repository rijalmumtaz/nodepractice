import axios from "configs/axios";
import { FETCH_PAGE } from "../types";

export const fetchPage = (url, page) => (dispatch) => {
  return axios
    .get(url)
    .then((response) => {
      dispatch({
        type: FETCH_PAGE,
        payload: {
          [page]: response.data,
        },
      });
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(Error, error.message);
      }
    });
};
