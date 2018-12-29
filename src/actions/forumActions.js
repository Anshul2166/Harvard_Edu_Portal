import * as ACTIONS from "./actionTypes";

export function show_threads(forum) {
  return {
    type: ACTIONS.SHOW_FORUM,
    payload: forum
  };
}

export function add_thread(data) {
  let threadData = {
    mainMessage: data.threadMessage,
    comments: [],
    votes: 0
  };
  return {
    type: ACTIONS.ADD_THREAD,
    payload: threadData
  };
}
