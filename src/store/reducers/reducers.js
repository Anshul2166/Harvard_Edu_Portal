import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import communitiesReducer from "./communitiesReducer";
import postsReducer from "./postsReducer";
import specializationReducer from "./specializationReducer";
import degreeReducer from "./degreeReducer";

export default combineReducers({
  courses: courseReducer,
  communities: communitiesReducer,
  posts: postsReducer,
  specialization:specializationReducer,
  degrees:degreeReducer
});
