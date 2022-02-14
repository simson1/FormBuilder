import axios from "axios";

export const DATA_START = "DATA_START";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";

export const dataStart = () => ({ type: DATA_START });

export const postDataSuccess = (data) => ({
  type: POST_DATA_SUCCESS,
  payload: data,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const dataFailure = () => ({ type: DATA_FAILURE });

export function fetchData() {
  return async (dispatch) => {
    dispatch(dataStart());
    axios
      .get("/forms")
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(dataFailure());
      });
  };
}

export function postData(formData) {
  return async (dispatch) => {
    dispatch(dataStart());
    axios
      .post("/forms", formData)
      .then((response) => {
        dispatch(postDataSuccess(formData));
      })
      .catch((error) => {
        dispatch(dataFailure());
      });
  };
}
