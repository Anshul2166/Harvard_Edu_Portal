//reducer for all voyage-related
import * as ACTIONS from "../types/ticketTypes";

const ticketReducer = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TICKET_LOADING:
			return{
				...state,
				ticketFeteched:false
			}
		case ACTIONS.ADD_TICKET:
			return {
				...state,
				ticket: action.payload,
				ticketFeteched:true
			};
		case ACTIONS.ADD_TICKET_ERROR:
			return{
				...state,
				ticketErrorInFetching:true,
				ticketFeteched:true
			}
		case ACTIONS.GET_TICKETS_LOADING:
			return{
				...state,
				ticketFeteched:false
			}
		case ACTIONS.GET_TICKETS:
			return {
				...state,
				tickets: action.payload,
				ticketFeteched:true
			};
		case ACTIONS.GET_TICKETS_ERROR:
			return{
				...state,
				ticketErrorInFetching:true,
				ticketFeteched:true
			}
		case ACTIONS.ACTION_ON_TICKET_LOADING:
			return{
				...state,
				ticketActionFeteched:false
			}
		case ACTIONS.ACTION_ON_TICKET:
			return {
				...state,
				ticketActionFeteched:true
			};
		case ACTIONS.ACTION_ON_TICKET_ERROR:
			return{
				...state,
				ticketActionErrorInFectching:true,
				ticketActionFeteched:true
			}
		default:
			return state;
	}
};

export default ticketReducer;
