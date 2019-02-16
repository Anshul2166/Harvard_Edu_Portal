//reducer for all activity-related
import * as ACTIONS from "../types/actionTypes";

const profileInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.GET_PROFILE_INFO:
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
};

export default profileInfoReducer;
