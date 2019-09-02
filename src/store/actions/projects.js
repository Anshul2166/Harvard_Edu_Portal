import axios from 'axios';
import * as ACTIONS from '../types/projectTypes';
import { API_URL } from '../../constants';

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
		const resp = await axios.get(API_URL + '/projects/single-project/' + projectId);
		console.log('Here');
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
		const resp = axios.put(API_URL + '/projects/' + projectId, data);
		console.log(resp);
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

