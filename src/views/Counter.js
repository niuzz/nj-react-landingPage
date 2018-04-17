/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Mon Apr 16 2018
 *  File : counter.js
 *******************************************/
import React, { Component } from 'react'

import store from '../Store'
import * as Actions from '../Actions'

import PropTypes from 'prop-types'

class Counter extends Component {
	constructor(props) {
		super(props)

		this.onClickIncrement = this.onClickIncrement.bind(this)
		this.onClickDecrement = this.onClickDecrement.bind(this)
		this.onChange = this.onChange.bind(this)
		this.getOwnState = this.getOwnState.bind(this)

		this.state = this.getOwnState()
	}

	getOwnState() {
		return {
			value: store.getState()[this.props.caption]
		}
	}

	onClickIncrement() {
		store.dispatch(Actions.increment(this.props.caption))
	}

	onClickDecrement() {
		store.dispatch(Actions.decrement(this.props.caption))
	}

	onChange() {
		this.setState(this.getOwnState())
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value)
	}

	componentDidMount() {
		store.subscribe(this.onChange)
	}

	componentWillUnmount() {
		store.unsubscribe(this.onChange)
	}

	render() {
		const { caption } = this.props
		return(
			<div>
				<button onClick={this.onClickIncrement}>+</button>
				<button onClick={this.onClickDecrement}>-</button>
				<span>{caption} count: {this.state.value}</span>
			</div>
		)
	}
}

Counter.propTypes = {
	caption: PropTypes.string.isRequired
}

export default Counter