/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Mon Apr 16 2018
 *  File : counter.js
 *******************************************/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
	constructor(props) {
		super(props)
		this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
		this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
		this.state = {
			count: props.initValue || 0
		}
	}
	onClickIncrementButton() {
		this.updateCount(true);
	}

	onClickDecrementButton() {
		this.updateCount(false);
	}

	updateCount(isIncrement) {
		const previousValue = this.state.count;
		const newValue = isIncrement ? previousValue + 1 : previousValue - 1;

		this.setState({ count: newValue })
		this.props.onUpdate(newValue, previousValue)
	}

	render() {
		const { caption } = this.props
		return(
			<div>
				<button onClick={this.onClickIncrementButton}>+</button>
				<button onClick={this.onClickDecrementButton}>-</button>
				<span>{caption} count: {this.state.count}</span>
			</div>
		)
	}
}

Counter.propTypes = {
	caption: PropTypes.string.isRequired,
	initValue: PropTypes.number,
	onUpdate: PropTypes.func
}

Counter.defaultProps = {
	initValue: 0,
	onUpdate: f => f
}

export default Counter