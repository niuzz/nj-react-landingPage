/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue Apr 17 2018
 *  File : summary.js
 *******************************************/
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function Summary({value}) {
		return(
			<div>
				Total Count: {value}
			</div>
		)
}

Summary.propTypes = {
	value: PropTypes.number.isRequired
}

function mapStateToProps(state) {
	let sum = 0
	for (const key in state) {
		if (state.hasOwnProperty(key)) {
			sum += state[key]
		}
	}
	return { value: sum }
}

export default connect(mapStateToProps)(Summary)