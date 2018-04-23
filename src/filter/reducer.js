/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Mon Apr 23 2018
 *  File : reducer.js
 *******************************************/
import { SET_FILTER } from './actionTypes.js';
import { FilterTypes } from '../constants.js'

export default (state = FilterTypes.ALL, action) => {
	switch (action.type) {
		case SET_FILTER: {
			return action.filter;
		}
		default:
			return state;
	}
}
