/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Fri Apr 13 2018
 *  File : page.js
 *******************************************/
import React, { Component } from 'react';
import { connect } from 'dva';

function mapStateToProps(state) {
	return {
		count: state.count
	}
}

class ListClass extends Component {
	render() {
		return(
			<div>
				list
				{this.props.count.record}
			</div>
		)
	}
}
export default connect(mapStateToProps)(ListClass);