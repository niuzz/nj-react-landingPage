/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Mon Apr 16 2018
 *  File : counterPanel.js
 *******************************************/
import React, { Component } from 'react';
import Counter from './Counter'
import Summary from './Summary';

class ControlPanel extends Component {
	render() {
		return(
			<div>
				<Counter  caption="First" />
				<Counter  caption="Second" />
				<Counter  caption="Third" />
				<hr />
				<Summary />
			</div>
		)
	}
}

export default ControlPanel