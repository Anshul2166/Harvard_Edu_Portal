//reducer for all editorial-related
import * as ACTIONS from "../types/editorialTypes";

const editorialReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_EDITORIALS:
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
};

export default editorialReducer;
