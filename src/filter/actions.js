/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Mon Apr 23 2018
 *  File : actions.js
 *******************************************/
import { SET_FILTER } from './actionTypes.js';

export const setFilter = filterType => ({
	type: SET_FILTER,
	filter: filterType
});
