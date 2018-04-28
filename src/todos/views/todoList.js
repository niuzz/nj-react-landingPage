/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Thu Apr 19 2018
 *  File : todoList.js
 *******************************************/
import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem.js';
import { toggleTodo, removeTodo } from '../actions.js';
import { FilterTypes } from '../../constants.js';
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './todoItem.css'

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
	return (
		<ul className="todo-list">
			<ReactCSSTransitionGroup
				transitionName="fade"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}>
				{
					todos.map((item) => (
						<TodoItem
							key={item.id}
							text={item.text}
							completed={item.completed}
							onToggle={() => onToggleTodo(item.id)}
							onRemove={() => onRemoveTodo(item.id)}
						/>
					))
				}
			</ReactCSSTransitionGroup>
		</ul>
	);
};

TodoList.propTypes = {
	todos: PropTypes.array.isRequired
};

const selectVisibleTodos = (todos, filter) => {
	switch (filter) {
		case FilterTypes.ALL:
			return todos;
		case FilterTypes.COMPLETED:
			return todos.filter(item => item.completed);
		case FilterTypes.UNCOMPLETED:
			return todos.filter(item => !item.completed);
		default:
			throw new Error('unsupported filter');
	}
}

const mapStateToProps = (state) => {
	return {
		todos: selectVisibleTodos(state.todos, state.filter)
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onToggleTodo: (id) => {
			dispatch(toggleTodo(id));
		},
		onRemoveTodo: (id) => {
			dispatch(removeTodo(id));
		}
	};
};

/*
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onToggleTodo: toggleTodo,
  onRemoveTodo: removeTodo
}, dispatch);
*/

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
