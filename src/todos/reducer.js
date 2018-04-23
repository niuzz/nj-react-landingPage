/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Mon Apr 23 2018
 *  File : reducer.js
 *******************************************/
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes.js';

export default (state = [], action) => {
	switch (action.type) {
		case ADD_TODO: {
				return [
				{
					id: action.id,
					text: action.text,
					completed: false
				},
				...state
			]
		}
		case TOGGLE_TODO: {
			return state.map(todoItme => {
				if (todoItme.id === action.id) {
					return {...todoItme, completed: !todoItme.completed}
				} else {
					return todoItme
				}
			})
		}
		case REMOVE_TODO: {
			return state.filter(todoItem => {
				return todoItem.id !== action.id
			})
		}
		default: {
			return state
		}
	}
}
