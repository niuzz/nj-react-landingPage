/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Thu Apr 19 2018
 *  File : todos.js
 *******************************************/
import React from 'react';
import AddTodo from './addTodo';
import TodoList from './todoList';

export default () => {
	return(
		<div>
			<AddTodo />
			<TodoList />
		</div>
	)
}
