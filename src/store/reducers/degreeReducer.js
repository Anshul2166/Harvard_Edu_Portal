//reducer for all activity-related
import * as ACTIONS from "../types/actionTypes";

const degreeReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_DEGREES:
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
};

export default degreeReducer;
