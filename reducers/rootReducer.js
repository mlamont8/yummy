import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import listReducer from "./listReducer";
import loadingStatus from "./loadingStatus";

const rootReducer = combineReducers({
  locationReducer,
  listReducer,
  loadingStatus
});

export default rootReducer;
