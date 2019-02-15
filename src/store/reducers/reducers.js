import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import communitiesReducer from "./communitiesReducer";
import postsReducer from "./postsReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  courses: courseReducer,
  communities: communitiesReducer,
  posts: postsReducer,
  profile: profileReducer
});
