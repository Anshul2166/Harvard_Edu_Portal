import axios from 'axios';
import { UPDATE_PROFILE_LOGGED_IN, UPDATE_PROFILE_LOGGED_OUT, UPDATED_PROFILE } from '../types/profileTypes';

export const fetchProfile = () => async dispatch => {
	try {
		const res = await axios.get('/api/users/get-user');
		dispatch({
			type: UPDATE_PROFILE_LOGGED_IN,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: UPDATE_PROFILE_LOGGED_OUT,
		});
	}
};

export const updateProfile = updates => async dispatch => {
	try {
		console.log(updates);
		const res = await axios.put('/api/users/', updates);
		console.log(res.data);
		dispatch({
			type: UPDATED_PROFILE,
			payload: res.data,
		});
		window.location.reload();
	} catch (error) {
		console.log(error);
		dispatch({
			type: UPDATE_PROFILE_LOGGED_OUT,
		});
	}
};

export const markQuestionAsSolved = questionName => async dispatch => {
	try {
		const res = await axios.post('/api/users/solved-question', {
			question: questionName,
		});
		dispatch({
			type: UPDATED_PROFILE,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const markQuestionAsUnSolved = questionName => async dispatch => {
	try {
		const res = await axios.post('/api/users/unsolve-question', {
			question: questionName,
		});
		dispatch({
			type: UPDATED_PROFILE,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
}

export const updateImage = userImage => async dispatch => {
	let baseConverted = await getBase64(userImage);
	let image = { userImage: baseConverted };
	try {
		const res = await axios.post('/api/users/image', image);
		dispatch({
			type: UPDATED_PROFILE,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: UPDATE_PROFILE_LOGGED_OUT,
		});
	}
};

export const signUpUser = (name, email, password) => async dispatch => {
	try {
		const res = await axios.post('/api/users/signup', {
			name,
			email,
			password,
		});
		dispatch({
			type: UPDATE_PROFILE_LOGGED_IN,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
		if (error.response) console.log(error.response);
		throw error.response;
	}
};
