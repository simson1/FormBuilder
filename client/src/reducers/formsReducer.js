import * as actions from "../actions/formsActions";
const initialState = {
  formsData: [],
  loading: false,
  error: false,
};

export default function formsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.DATA_START:
      return { ...state, loading: true };
    case actions.POST_DATA_SUCCESS:
      return {
        ...state,
        formsData: state.formsData.concat(action.payload),
        loading: false,
      };
    case actions.DATA_FAILURE:
      return { ...state, error: true };
    case actions.FETCH_DATA_SUCCESS:
      return { ...state, formsData: action.payload, loading: false };
    default:
      return state;
  }
}
