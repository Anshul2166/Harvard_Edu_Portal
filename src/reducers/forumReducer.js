//reducer for all activity-related
import * as ACTIONS from "../actions/actionTypes";

const forumReducer = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.SHOW_FORUM:
			return {
				...state,
				threads: action.payload
			};
		default:
			return state;
	}
};

export default forumReducer;
