/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Wed Apr 04 2018
 *  File : users.js
 *******************************************/
import request from '../../../utils/request';

export function fetch({ page = 1 }) {
	return request(`/api/users?_page=${page}&_limit=5`);
}