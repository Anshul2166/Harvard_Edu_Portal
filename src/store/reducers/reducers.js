import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import communitiesReducer from "./communitiesReducer";
import postsReducer from "./postsReducer";
import specializationReducer from "./specializationReducer";
import degreeReducer from "./degreeReducer";
import profileReducer from "./profileReducer";
import profileInfoReducer from "./profileInfoReducer";
import editorialReducer from "./editorialReducer";
import projectReducer from "./projectReducer";
import projectsListReducer from "./projectsListReducer";

export default combineReducers({
  courses: courseReducer,
  communities: communitiesReducer,
  posts: postsReducer,
  specialization: specializationReducer,
  degrees: degreeReducer,
  profile: profileReducer,
  profileInfo: profileInfoReducer,
  editorial:editorialReducer,
  project:projectReducer,
  projectsList:projectsListReducer
});
