/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue May 08 2018
 *  File : auth.js
 *******************************************/
import { authLogin} from '../../api/user';

export const types = {
	LOGIN: 'AUTH/LOGIN',
	LOGOUT: 'AUTH/LOGOUT'
}

export const actions = {
	login: (username, password)=>{
		return dispatch => {
			let param = { username, password }
			return authLogin(param).then(data => ({
				type: types.LOGIN
			}))
		}
	},
	logout: () =>({
		type: types.LOGOUT,
		username: null,
		uid: null
	}),
	setUserInfo: (username, uid) => ({
		username: username,
		uid: uid
	})
}

const reducers = function ( state , action ) {
	switch (action.type) {
		case types.LOGIN:
			return { ...state, uid: action.uid, username: action.username }
		case types.LOGOUT:
			return { ...state, uid: null, usernmae: null }
		default:
			return state
	}
}

export default reducers