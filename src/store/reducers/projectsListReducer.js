//reducer for all editorial-related
import * as ACTIONS from "../types/projectTypes";

const projectsListReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_ALL_PROJECTS:
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
};

export default projectsListReducer;
