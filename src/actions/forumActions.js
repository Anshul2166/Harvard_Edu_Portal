import * as ACTIONS from "./actionTypes";

export function show_threads(forum) {
	return {
	  type: ACTIONS.DISCONNECT_SERVICE,
	  payload:forum
	};
}