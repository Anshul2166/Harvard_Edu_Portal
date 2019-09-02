//reducer for all editorial-related
import * as ACTIONS from "../types/projectTypes";

const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_PROJECTS:
      return {
        ...state,
        info: action.payload
      };
    
    case ACTIONS.GET_SINGLE_PROJECT_LOADING:
      return{
        ...state,
        projectFeteched:false
      }
    case ACTIONS.GET_SINGLE_PROJECT:
      return{
        ...state,
        projectFeteched:true,
        project:action.payload
      }
    case ACTIONS.GET_SINGLE_PROJECT_ERROR:
      return{
        ...state,
        projectFeteched:true,
        projectErrorInFetching:true
      }
    default:
      return state;
  }
};

export default projectReducer;
