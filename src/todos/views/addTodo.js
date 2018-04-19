/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Thu Apr 19 2018
 *  File : addTodo.js
 *******************************************/

 import React, { Component } from 'react';
 import PropTypes from "prop-type";

 class AddTodo extends Component{
	 render() {
		 return(
			 <div>
				 <form onSubmit={this.onSubmit}>
					<input ref={this.refInput}/>
					<button type='submit'>添加</button>
				 </form>
			 </div>
		 )
	 }
 }

 AddTodo.propType = {
	 onAdd: PropTypes.func.isrequired
 }

 export default AddTodo