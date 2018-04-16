/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Mon Apr 16 2018
 *  File : counterPanel.js
 *******************************************/
import React, { Component } from 'react';
import Counter from './counter'

class ControlPanel extends Component {
	constructor(props) {
		super(props); 

		this.onCounterUpdate = this.onCounterUpdate.bind(this); 

		this.initValues = [0, 10, 20]; 
		const initSum = this.initValues.reduce((a, b) => a + b, 0); 
		this.state = { sum: initSum };
	}

	onCounterUpdate(newValue, previousValue) {
		const valueChange = newValue - previousValue
		this.setState({sum: this.state.sum + valueChange})
	}

	render() {
		return(
			<div>
				<Counter onUpdate={this.onCounterUpdate} caption="" initValue={110} />
				<Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={10} />
				<Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={20} />
				<div>The count: {this.state.sum }</div>
			</div>
		)
	}
}

export default ControlPanel