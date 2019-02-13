import { UPDATE_COMMUNITIES_LIST } from "../types/communitiesTypes";

const initialState = {
  fetched: false,
  list: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_COMMUNITIES_LIST:
      return { ...state, fetched: true, list: payload };
    default:
      return state;
  }
};
