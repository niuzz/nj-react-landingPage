/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Thu May 03 2018
 *  File : app.js
 *******************************************/
const initialState = {
	requestQuantity: 0,
	error: null
}
/**
 * types
 */
export const types = {
	START_REQUEST: 'APP/START_REQUEST',
	FINISH_REQUEST: 'APP/FINISH_REQUEST',
	SET_ERROR: 'APP/SET_ERROR',
	REMOVE_ERROR: 'APP/REMOVE_ERROR'
}
/**
 * action creaters
 */
export const actions = {
	startReauest: () => ({
		type: types.START_REQUEST
	}),
	finalRequest: () => ({
		type: types.FINISH_REQUEST
	}),
	setError: (error) => ({
		type: types.SET_ERROR,
		error
	}),
	removeError: error => ({
		type: types.REMOVE_ERROR
	})
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.START_REQUEST:
			return {...state, requestQuantity: state.requestQuantity + 1};
		case types.FINISH_REQUEST:
			return {...state, requestQuantity: state.requestQuantity - 1};
		case types.SET_ERROR:
			return {...state, error: action.error};
		case types.REMOVE_ERROR:
			return {...state, error: null};
		default:
			return state;
	}
}

export default reducer;

export const getError = state => {
	return state.app.error;
};

export const getRequestQuantity = state => {
	return state.app.requestQuantity;
};