import {
  UPDATE_PROFILE_LOGGED_IN,
  UPDATE_PROFILE_LOGGED_OUT
} from "../types/profileTypes";

const initialState = {
  fetched: false,
  authenticated: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_PROFILE_LOGGED_IN:
      return { ...state, fetched: true, authenticated: true, ...payload };

    case UPDATE_PROFILE_LOGGED_OUT:
      return {
        fetched: true,
        authenticated: false
      };
    default:
      return state;
  }
};
