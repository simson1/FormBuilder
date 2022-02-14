import { combineReducers } from "redux";

import formsReducer from "./formsReducer";
import formReducer from "./formReducer";

const rootReducer = combineReducers({
  forms: formsReducer,
  form: formReducer,
});

export default rootReducer;
