import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import listReducer from "./listReducer";

const rootReducer = combineReducers({
  locationReducer,
  listReducer
});

export default rootReducer;
