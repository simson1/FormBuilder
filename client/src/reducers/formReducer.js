import * as actions from "../actions/formActions";
const initialState = {
  formData: {},
  loading: false,
  error: false,
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_FORM:
      return { ...state, loading: true };
    case actions.GET_FORM_SUCCESS:
      return {
        ...state,
        formData: action.payload,
        loading: false,
      };
    case actions.GET_FORM_FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}
