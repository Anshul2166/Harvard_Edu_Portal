//reducer for all editorial-related
import * as ACTIONS from "../types/projectTypes";

const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_PROJECTS:
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
};

export default projectReducer;
