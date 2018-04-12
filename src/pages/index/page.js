/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Thu Apr 12 2018
 *  File : page.js
 *******************************************/
import React from 'react'
import { connect } from 'dva'

function mapStateToProps() {
	return { count: 10 };
}

class IndexClass extends React.Component {
	render() {
		return(
			<div>
				index {this.props.count}
			</div>
		)
	}
}
export default connect(mapStateToProps)(IndexClass)