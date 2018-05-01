/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Sat Apr 28 2018
 *  File : About.js
 *******************************************/
import React from 'react';
import {connect} from 'react-redux';

const About = (props) => {
	return (
		<div> {props.name}:happy</div>
	);
};

const mapStateToProp = (state) => {
	return {
		name: state.name
	}
}

export default connect(mapStateToProp)(About);
