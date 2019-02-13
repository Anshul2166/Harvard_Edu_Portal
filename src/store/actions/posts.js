import axios from "axios";
import {
  PUT_SINGLE_POST_TO_TOP,
  UPDATE_POSTS_SCROLLABLE,
  UPDATE_POSTS_LISTS,
  RESET_POSTS,
  FETCH_SINGLE_POST
} from "../types/postsTypes";

export const createPost = (community, title, description) => async dispatch => {
  try {
    console.log("Create post have been called");
    const res = await axios.post("/api/posts/create-post", {
      title,
      community,
      description: JSON.stringify(description)
    });
    console.log("Post have been successfully created", res.data);
    dispatch({
      type: PUT_SINGLE_POST_TO_TOP,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchPost = (skip, limit) => async dispatch => {
  try {
    console.log("fetch post have been called");
    const res = await axios.get(`/api/posts/find-all/${skip}/${limit}`);
    console.log("Fetch post have been called with data", res.data);
    if (!res.data || res.data.length === 0) {
      dispatch({
        type: UPDATE_POSTS_SCROLLABLE,
        payload: false
      });
    }

    dispatch({
      type: UPDATE_POSTS_LISTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: UPDATE_POSTS_SCROLLABLE,
      payload: false
    });
    console.log(error);
  }
};

export const fetchSinglePost = id => async dispatch => {
  try {
    const res = await axios.get(`/api/posts/${id}`);
    console.log("Single post have been fetched", res.data);
    dispatch({
      type: FETCH_SINGLE_POST,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const commentOnSinglePost = (id, content) => async dispatch => {
  try {
    console.log("Comment on single post have been called", id, content);
    const res = await axios.post(`/api/posts/${id}/addComment`, { content });
    dispatch({
      type: FETCH_SINGLE_POST,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const resetPost = () => dispatch => {
  dispatch({
    type: RESET_POSTS
  });
};
