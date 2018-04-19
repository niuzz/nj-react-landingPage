/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Thu Apr 19 2018
 *  File : actions.js
 *******************************************/
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes.js';

let nextTodoId = 0;

export const addTodo = (text) => ({
	type: ADD_TODO,
	completed: false,
	id: nextTodoId++, // 为每个生产的待办事项赋唯一ID
	text: text
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	id: id
});

export const removeTodo = (id) => ({
	type: REMOVE_TODO,
	id: id
});