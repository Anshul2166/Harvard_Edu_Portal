import axios from 'axios';
import {
	PUT_SINGLE_POST_TO_TOP,
	UPDATE_POSTS_SCROLLABLE,
	UPDATE_POSTS_LISTS,
	RESET_POSTS,
	FETCH_SINGLE_POST,
	UPDATE_SINGLE_POST_COMMENT,
	DELETE_POST,
	DELETE_POST_ERROR,
	EDIT_POST,
	EDIT_POST_ERROR,
} from '../types/postsTypes';
import { UPDATE_PROFILE_LOGGED_IN } from '../types/profileTypes';

export const createPost = (community, title, description) => async dispatch => {
	try {
		console.log('Create post have been called');
		const res = await axios.post('/api/posts/create-post', {
			title,
			community,
			description: description.toString(),
		});
		console.log('Post have been successfully created', res.data);
		dispatch({
			type: PUT_SINGLE_POST_TO_TOP,
			payload: res.data,
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
		console.log('Post have been upvoted', res.data);

		dispatch({
			type: UPDATE_PROFILE_LOGGED_IN,
			payload: res.data.newUser,
		});

		console.log('Update single post have been called');
		dispatch({
			type: FETCH_SINGLE_POST,
			payload: res.data.newPost,
		});
	} catch (error) {
		console.log(error);
	}
};

export const removeSinglePostUpvote = id => async dispatch => {
	try {
		const res = await axios.put(`/api/posts/${id}/upvotes-remove`);

		//UPDATES THE USER PROFILE LOGGED IN
		console.log('Post have been upvoted', res.data);

		dispatch({
			type: UPDATE_PROFILE_LOGGED_IN,
			payload: res.data.newUser,
		});

		console.log('Update single post have been called');
		dispatch({
			type: FETCH_SINGLE_POST,
			payload: res.data.newPost,
		});
	} catch (error) {
		console.log(error);
	}
};

export const downvoteSinglePost = id => async dispatch => {
	try {
		const res = await axios.put(`/api/posts/${id}/downvotes-add`);

		//UPDATES THE USER PROFILE LOGGED IN
		console.log('Post have been upvoted', res.data);

		dispatch({
			type: UPDATE_PROFILE_LOGGED_IN,
			payload: res.data.newUser,
		});

		console.log('Update single post have been called');
		dispatch({
			type: FETCH_SINGLE_POST,
			payload: res.data.newPost,
		});
	} catch (error) {
		console.log(error);
	}
};

export const removeSinglePostDownvote = id => async dispatch => {
	try {
		const res = await axios.put(`/api/posts/${id}/downvotes-remove`);

		//UPDATES THE USER PROFILE LOGGED IN
		console.log('Post have been upvoted', res.data);

		dispatch({
			type: UPDATE_PROFILE_LOGGED_IN,
			payload: res.data.newUser,
		});

		console.log('Update single post have been called');
		dispatch({
			type: FETCH_SINGLE_POST,
			payload: res.data.newPost,
		});
	} catch (error) {
		console.log(error);
	}
};
export const fetchPost = (skip, limit) => async dispatch => {
	try {
		console.log('fetch post have been called');
		const res = await axios.get(`/api/posts/find-all/${skip}/${limit}`);
		console.log('Fetch post have been called with data', res.data);
		if (!res.data || res.data.length === 0) {
			dispatch({
				type: UPDATE_POSTS_SCROLLABLE,
				payload: false,
			});
		}

		dispatch({
			type: UPDATE_POSTS_LISTS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: UPDATE_POSTS_SCROLLABLE,
			payload: false,
		});
		console.log(error);
	}
};

export const fetchSinglePost = id => async dispatch => {
	try {
		const res = await axios.get(`/api/posts/${id}`);
		console.log('Single post have been fetched', res.data);
		dispatch({
			type: FETCH_SINGLE_POST,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const commentOnSinglePost = (id, content) => async dispatch => {
	try {
		console.log('Comment on single post have been called', id, content);
		const res = await axios.post(`/api/posts/${id}/addComment`, { content });
		dispatch({
			type: FETCH_SINGLE_POST,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const resetPost = () => dispatch => {
	dispatch({
		type: RESET_POSTS,
	});
};

export const likePostComment = (id, index) => async dispatch => {
	try {
		const res = await axios.put(`/api/comments/${id}/like`);
		console.log('Like post comment', res.data);
		dispatch({
			type: UPDATE_SINGLE_POST_COMMENT,
			payload: {
				index,
				comment: res.data,
			},
		});
		console.log('Comment have been liked', res.data);
	} catch (error) {
		console.log(error);
	}
};

export const dislikePostComment = (id, index) => async dispatch => {
	try {
		const res = await axios.put(`/api/comments/${id}/dislike`);
		console.log('Unlike post comment', res.data);
		dispatch({
			type: UPDATE_SINGLE_POST_COMMENT,
			payload: {
				index,
				comment: res.data,
			},
		});
		console.log('Comment have been liked', res.data);
	} catch (error) {
		console.log(error);
	}
};

export const deletePost = post => async dispatch => {
	try {
		let id = post._id;
		const resp = await axios.delete(`/api/posts/${id}`);
		dispatch({
			type: DELETE_POST,
			payload: resp.data,
		});
		console.log('Post delete called');
	} catch (err) {
		dispatch({
			type: DELETE_POST_ERROR,
			payload: err,
		});
	}
};

export const editPost = (post,title,description) => async dispatch => {
	try {
		let id = post._id;
		const resp = await axios.put(`/api/posts/${id}`, { title,description });
		dispatch({
			type: EDIT_POST,
			payload: resp.data,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: EDIT_POST_ERROR,
			payload: err,
		});
	}
};
