/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Fri Apr 13 2018
 *  File : model.js
 *******************************************/

import routerRedux from 'dva/router';

export default {
	namespace: 'global',
	state: {
		title: '金网传媒',
		login: false
	},
	reducers: {
		sigin(state) {
			return {
				...state,
				login: true
			};
		},
	},
	effects: {
		*login(action, { call, put }) {
			yield put({
				type: 'sigin'
			});
			yield put(routerRedux.push('/index'));
		}
	}
}