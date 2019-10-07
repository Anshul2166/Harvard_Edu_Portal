import axios from 'axios';
import * as ACTIONS from '../types/projectTypes';
import { API_URL } from '../../constants';
import { toast } from 'react-toastify';

export const getAllProjects = () => async dispatch => {
	try {
		dispatch({
			type: ACTIONS.GET_PROJECTS_LOADING
		});
		const resp = await axios.get('/api/projects/all');
		console.log(resp);
		dispatch({
			type: ACTIONS.GET_PROJECTS,
			payload: resp.data,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: ACTIONS.GET_PROJECTS_ERROR,
			payload: err,
		});
	}
};

export const getSingleProject = projectId => async dispatch => {
	try {
		dispatch({
			type: ACTIONS.GET_SINGLE_PROJECT_LOADING,
		});
		console.log(projectId);
		const resp = await axios.get('/api/projects/single-project/' + projectId);
		console.log(resp);
		dispatch({
			type: ACTIONS.GET_SINGLE_PROJECT,
			payload: resp.data,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: ACTIONS.GET_SINGLE_PROJECT_ERROR,
			payload: err,
		});
	}
};

export const updateProject = (projectId, data) => async dispatch => {
	console.log(projectId);
	console.log(data);
	try {
		dispatch({
			type: ACTIONS.UPDATE_PROJECT_LOADING,
		});
		const resp = axios.put('/api/projects/' + projectId, data);
		console.log(resp);
		window.location.reload();
		dispatch({
			type: ACTIONS.UPDATE_PROJECT,
			payload: resp.data,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: ACTIONS.UPDATE_PROJECT_ERROR,
			payload: err,
		});
	}
};

export const applyForProject = (projectId) => async dispatch => {
	console.log(projectId);
	try {
		dispatch({
			type: ACTIONS.APPLY_FOR_PROJECT_LOADING,
		});
		const resp = axios.put('/api/projects/apply/' + projectId);
		console.log(resp);
		window.location.reload();
		dispatch({
			type: ACTIONS.APPLY_FOR_PROJECT,
			payload: resp.data,
		});
	} catch (err) {
		console.log(err);
		toast.error('Error while applying. Please try again later', { autoClose: 2000 });
		dispatch({
			type: ACTIONS.APPLY_FOR_PROJECT_ERROR,
			payload: err,
		});
	}
};

export const submitProject = (data) => async dispatch => {
	try {
		console.log(data);
		dispatch({
			type: ACTIONS.SUBMIT_PROJECT_LOADING,
		});
		const resp = await axios.post('/api/projects/add-project',data);
		console.log(resp);
		dispatch({
			type: ACTIONS.SUBMIT_PROJECT,
			payload: resp.data,
		});
	} catch (err) {
		console.log(err);
		toast.error('Error while submitting. Please try again later', { autoClose: 2000 });
		dispatch({
			type: ACTIONS.SUBMIT_PROJECT_ERROR,
			payload: err,
		});
	}
};



export const removeFromProject = (projectId) => async dispatch => {
	console.log(projectId);
	try {
		dispatch({
			type: ACTIONS.REMOVE_FROM_PROJECT_LOADING,
		});
		const resp = axios.put('/api/projects/remove-apply/' + projectId);
		console.log(resp);
		window.location.reload();
		dispatch({
			type: ACTIONS.REMOVE_FROM_PROJECT,
			payload: resp.data,
		});
	} catch (err) {
		console.log(err);
		toast.error('Error while removing. Please try again later', { autoClose: 2000 });
		dispatch({
			type: ACTIONS.REMOVE_FROM_PROJECT_ERROR,
			payload: err,
		});
	}
};

export const deleteProject = (projectId) => async dispatch => {
	console.log(projectId);
	try {
		dispatch({
			type: ACTIONS.DELETE_PROJECT_LOADING,
		});
		const resp = axios.delete('/api/projects/' + projectId);
		console.log(resp);
		dispatch({
			type: ACTIONS.DELETE_PROJECT,
			payload: resp.data,
		});
		window.location.href='/projects-view';
	} catch (err) {
		console.log(err);
		toast.error('Error while removing. Please try again later', { autoClose: 2000 });
		dispatch({
			type: ACTIONS.DELETE_PROJECT_ERROR,
			payload: err,
		});
	}
};
