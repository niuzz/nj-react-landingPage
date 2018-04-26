/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Thu Apr 26 2018
 *  File : countDown.js
 *******************************************/
import { Component } from 'react';
import PropTypes from 'prop-types'

class CountDown extends Component {
	constructor() {
		super(...arguments);

		this.state = { count: this.props.startCount };
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.count !== this.state.count;
	}

	componentDidMount() {
		this.intervalHandle = setInterval(() => {
			const newCount = this.state.count - 1;
			if (newCount >= 0) {
				this.setState({ count: newCount });
			} else {
				window.clearInterval(this.intervalHandle);
				this.intervalHandle = null;
			}
		}, 1000);
	}

	componentWillUnmount() {
		if (this.intervalHandle) {
			window.clearInterval(this.intervalHandle);
			this.intervalHandle = null;
		}
	}

	render() {
		return this.props.children(this.state.count);
	}
}

CountDown.propTypes = {
	children: PropTypes.func.isRequired,
	startCount: PropTypes.number.isRequired
}

export default CountDown