/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue May 08 2018
 *  File : auth.js
 *******************************************/
export const types = {
	LOGIN: 'AUTH/LOGIN',
	LOGOUT: 'AUTH/LOGOUT'
}

export const actions = {
	login: (username, password)=>{

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

export default reducers = {

}