import axios from "axios";
import {
  PUT_SINGLE_POST_TO_TOP,
  UPDATE_POSTS_SCROLLABLE,
  UPDATE_POSTS_LISTS,
  RESET_POSTS,
  FETCH_SINGLE_POST,
  UPDATE_SINGLE_POST_COMMENT
} from "../types/postsTypes";
import { UPDATE_PROFILE_LOGGED_IN } from "../types/profileTypes";

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
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const upvoteSinglePost = id => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/${id}/upvotes-add`);

    //UPDATES THE USER PROFILE LOGGED IN
    console.log("Post have been upvoted", res.data);

    dispatch({
      type: UPDATE_PROFILE_LOGGED_IN,
      payload: res.data.newUser
    });

    console.log("Update single post have been called");
    dispatch({
      type: FETCH_SINGLE_POST,
      payload: res.data.newPost
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeSinglePostUpvote = id => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/${id}/upvotes-remove`);

    //UPDATES THE USER PROFILE LOGGED IN
    console.log("Post have been upvoted", res.data);

    dispatch({
      type: UPDATE_PROFILE_LOGGED_IN,
      payload: res.data.newUser
    });

    console.log("Update single post have been called");
    dispatch({
      type: FETCH_SINGLE_POST,
      payload: res.data.newPost
    });
  } catch (error) {
    console.log(error);
  }
};

export const downvoteSinglePost = id => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/${id}/downvotes-add`);

    //UPDATES THE USER PROFILE LOGGED IN
    console.log("Post have been upvoted", res.data);

    dispatch({
      type: UPDATE_PROFILE_LOGGED_IN,
      payload: res.data.newUser
    });

    console.log("Update single post have been called");
    dispatch({
      type: FETCH_SINGLE_POST,
      payload: res.data.newPost
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeSinglePostDownvote = id => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/${id}/downvotes-remove`);

    //UPDATES THE USER PROFILE LOGGED IN
    console.log("Post have been upvoted", res.data);

    dispatch({
      type: UPDATE_PROFILE_LOGGED_IN,
      payload: res.data.newUser
    });

    console.log("Update single post have been called");
    dispatch({
      type: FETCH_SINGLE_POST,
      payload: res.data.newPost
    });
  } catch (error) {
    console.log(error);
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

export const likePostComment = (id, index) => async dispatch => {
  try {
    const res = await axios.put(`/api/comments/${id}/like`);
    console.log("Like post comment", res.data);
    dispatch({
      type: UPDATE_SINGLE_POST_COMMENT,
      payload: {
        index,
        comment: res.data
      }
    });
    console.log("Comment have been liked", res.data);
  } catch (error) {
    console.log(error);
  }
};

export const dislikePostComment = (id, index) => async dispatch => {
  try {
    const res = await axios.put(`/api/comments/${id}/dislike`);
    console.log("Like post comment", res.data);
    dispatch({
      type: UPDATE_SINGLE_POST_COMMENT,
      payload: {
        index,
        comment: res.data
      }
    });
    console.log("Comment have been liked", res.data);
  } catch (error) {
    console.log(error);
  }
};
