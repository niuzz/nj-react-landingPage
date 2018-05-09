/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue May 08 2018
 *  File : index.js
 *******************************************/
import React, { Component } from 'react';
import {
	push
} from 'react-router-redux'
import { connect } from 'react-redux'

import { Button } from 'antd';
import './Home.css';

class Home extends Component {

	constructor() {
		super()
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
	}

	render() {
		return(
		<div>
			<p>Home</p>
				<Button type='primary' size='small' icon='cloud' onClick={this.handleClick}>要有光</Button>		
		</div>
		)
	}
}

export default connect(null, dispatch => ({
	login: () => {
		dispatch(push('/login'))
	}
}))(Home)