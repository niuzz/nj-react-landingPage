/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Wed May 02 2018
 *  File : index.js
 *******************************************/
import React, { Component } from 'react';
import Header from '../../components/Header';

class Home extends Component {
	render() {
		return(
			<div className="home">
				<Header />
				<h5>Home</h5>
			</div>
		)
	}
}

export default Home