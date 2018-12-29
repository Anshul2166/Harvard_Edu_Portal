//reducer for all activity-related
import * as ACTIONS from "../actions/actionTypes";

const forumReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_FORUM:
      return {
        ...state,
        threads: action.payload
      };
    case ACTIONS.ADD_THREAD:
      return {
        ...state,
        threads: state.threads.concat(action.payload)
      };
    case ACTIONS.ADD_COMMENT:
      let index = 0;
      return {
		...state,
		threads:[{
			...state.threads,comments:state.threads[index].comments.concat(action.payload)
		}]
	}
    default:
      return state;
  }
};

export default forumReducer;
