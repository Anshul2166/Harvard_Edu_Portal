//reducer for all editorial-related
import * as ACTIONS from "../types/projectTypes";

const projectsListReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_ALL_PROJECTS:
      return {
        ...state,
        info: action.payload
      };
    case ACTIONS.GET_PROJECTS_LOADING:
      return{
        ...state,
        fetched:false,
        errorFetching:false
      }
    case ACTIONS.GET_PROJECTS:
      return {
        ...state,
        projectList: action.payload,
        fetched:true,
        errorFetching:false
      };
    case ACTIONS.GET_PROJECTS_ERROR:
      return {
        ...state,
        error:action.payload,
        fetched:true,
        errorFetching:true
      };
    default:
      return state;
  }
};

export default projectsListReducer;
