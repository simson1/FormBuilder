import axios from "axios";
export const GET_FORM = "GET_FORM";
export const GET_FORM_SUCCESS = "GET_FORM_SUCCESS";
export const GET_FORM_FAILURE = "GET_FORM_FAILURE";

export const getForm = () => ({ type: GET_FORM });
export const getFormSuccess = (form) => ({
  type: GET_FORM_SUCCESS,
  payload: form,
});
export const getFormFailure = () => ({ type: GET_FORM_FAILURE });

export function fetchForm(id) {
  return async (dispatch) => {
    dispatch(getForm());
    axios
      .get(`/forms/${id}`)
      .then((response) => {
        dispatch(getFormSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getFormFailure());
      });
  };
}
