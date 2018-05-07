/**
 * types
 */

import { login } from '../../api/user';

 const initialState = {
	uid: '', 
	username: '',
 }

 export const types = {
	LOGIN: 'AUTH/LGOIN',
	LOGOUT: 'AUTH/LOGOUT',
	SET_USERINFO: 'AUTH/SET_USERINFO'
 }

 export const actions = {
	 login: (email, password) => {
		 return dispatch => {
			 const params ={ username: email, password }
			 return login(params).then(response => {
				 let code = response.data.code
				 let data = response.data.data
				 if (code === 1000) {
					 let username = data.contact
					 let uid = data.uid
					 dispatch(actions.setUserInfo(uid, username))
				 }
			 })
		 }
	 },
	 logout: () => ({
		 type: types.LOGOUT
	 }),
	 setUserInfo: (uid, username) => ({
		 type: types.LOGIN,
		 uid: uid,
		 username: username
	 })
 }
 
 const reducer = (state=initialState, action) => {
	 switch (action.type) {
		 case types.LOGIN:
			return {...state, uid : action.uid, username: action.username }
		 case types.LOGOUT:
		 	return {...state, uid: null, username: null}
		 default:
			 return state
	 }
 }

 export default reducer

 export const getLoggedUser = state => state.auth