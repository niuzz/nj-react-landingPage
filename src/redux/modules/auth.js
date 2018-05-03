/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Thu May 03 2018
 *  File : auth.js
 *******************************************/

import { Login } from '../../api/login';

import {actions as appActions } from './app';

const initialState = {
	uid: null,
	username: null
}

/**
 * types
 */

export const types = {
	LOGIN: 'AUTH/LOGIN',
	LOGOUT: 'AUTH/LOGOUT'
}

/**
 * actionCreates
 */

export const actions = {
	login: (username, password) => {
		return dispatch => {
			dispatch(appActions.startReauest());
			const params = { username, password};
			return Login(params).then(data => {
				dispatch(appActions.finalRequest());
				const code = data.data.code;
				if (code === 1000) {
					dispatch(actions.setLoginInfo(data.data.data.uid, username));
				} else {
					dispatch(appActions.setError(code));
				}
			})
		}
	},
	logout: () => ({
		type: types.LOGOUT
	}),
	setLoginInfo: (uid, username) => ({
		type: types.LOGIN,
		uid,
		username
	})
}

/**
 * reducers
 * @param {state} state 状态
 * @param {action} action 函数
 */

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN:
			return {...state, uid: action.uid, username: action.username};
		case types.LOGOUT:
			return {...state, uid: null, username: null};
		default:
			return state;
	}
}

export default reducer;

// selectors
export const getLoggedUser = state => state.auth;