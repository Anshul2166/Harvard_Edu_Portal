import {
  UPDATE_POSTS_LISTS,
  UPDATE_POSTS_SCROLLABLE,
  UPDATE_SINGLE_POST,
  PUT_SINGLE_POST_TO_TOP,
  HIDE_POST,
  RESET_POSTS,
  FETCH_SINGLE_POST,
  UPDATE_SINGLE_POST_COMMENT,
  DELETE_POST
} from "../types/postsTypes";
import update from "immutability-helper";

const initialState = {
  list: [],
  scrollable: true,

  //Keeps the track of single post the user is selecting
  singlePost: {
    fetched: false
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_POSTS_LISTS:
      return { ...state, list: [...state.list, ...payload] };

    case UPDATE_POSTS_SCROLLABLE:
      return { ...state, scrollable: payload };

    case RESET_POSTS:
      return { ...state, list: [], scrollable: true };

    //Mainly updates the post in forum page
    //mostlye for upvote and downvote
    case UPDATE_SINGLE_POST:
      return {
        ...state,
        singlePost: {
          fetched: true,
          ...payload
        }
      };

    case UPDATE_SINGLE_POST_COMMENT:
      return update(state, {
        singlePost: {
          comments: {
            [payload.index]: {
              $set: payload.comment
            }
          }
        }
      });
    case FETCH_SINGLE_POST:
      return {
        ...state,
        singlePost: {
          fetched: true,
          ...payload
        }
      };
    case HIDE_POST:
      return update(state, { list: { $splice: [[payload.index, 1]] } });

    case PUT_SINGLE_POST_TO_TOP:
      return {
        ...state,
        list: [payload, ...state.list]
      };
    case DELETE_POST:
      return{
        ...state
      }
    default:
      return state;
  }
};
