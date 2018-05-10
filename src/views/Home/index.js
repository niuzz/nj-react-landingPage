/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue May 08 2018
 *  File : index.js
 *******************************************/
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {actions as authActions} from '../../redux/modules/auth';

import { connect } from 'react-redux';

import { Button } from 'antd';
import './Home.css';

class Home extends Component {

	constructor() {
		super()
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.props.login('aaa', 111)
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

const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators(authActions, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(Home)