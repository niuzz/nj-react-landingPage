import React, { Component } from 'react';
import {Button} from '@material-ui/core';

class List extends Component {

	constructor(props) {
		super(props)
		this.backToHome = this.backToHome.bind(this)
	}

	backToHome() {
		this.props.history.push('/')
	}
	render() {
		return (
			<div>
				<h3>List</h3>
				<Button onClick={this.backToHome} variant="raised" color="primary">back to home</Button>
			</div>
		);
	}
}

export default List