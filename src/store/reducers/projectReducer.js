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
        singleProjectFetched:false
      }
    case ACTIONS.GET_SINGLE_PROJECT:
      return{
        ...state,
        singleProjectFetched:true,
        project:action.payload
      }
    case ACTIONS.GET_SINGLE_PROJECT_ERROR:
      return{
        ...state,
        singleProjectFetched:true,
        GET_SINGLE_PROJECT_ERROR:true
      }
    case ACTIONS.DELETE_PROJECT_LOADING:
      return{
        ...state,
        projectDeleted:false,
        projectDeletedError:false
      }
    case ACTIONS.DELETE_PROJECT:
      return{
        ...state,
        projectDeleted:true,
        projectDeletedError:false
      }
    case ACTIONS.DELETE_PROJECT_ERROR:
      return{
        ...state,
        projectDeleted:false,
        projectDeletedError:false
      }
    default:
      return state;
  }
};

export default projectReducer;
