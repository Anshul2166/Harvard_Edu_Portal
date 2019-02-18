//reducer for all activity-related
import * as ACTIONS from "../types/actionTypes";

const specializationReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_SPECIALIZATION:
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
};

export default specializationReducer;
