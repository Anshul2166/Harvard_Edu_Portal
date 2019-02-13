import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import communitiesReducer from "./communitiesReducer";
import postsReducer from "./postsReducer";

export default combineReducers({
  courses: courseReducer,
  communities: communitiesReducer,
  posts: postsReducer
});
