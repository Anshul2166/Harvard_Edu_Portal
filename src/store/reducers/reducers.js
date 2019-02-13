import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import communitiesReducer from "./communitiesReducer";

export default combineReducers({
  courses: courseReducer,
  communities: communitiesReducer
});
