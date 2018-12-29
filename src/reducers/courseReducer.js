//reducer for all activity-related
import * as ACTIONS from "../actions/actionTypes";

const courseReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_COURSES:
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
};

export default courseReducer;
