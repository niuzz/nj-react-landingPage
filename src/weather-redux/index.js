/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Fri Apr 27 2018
 *  File : index.js
 *******************************************/
import React, {Component} from 'react';
import {view as Weather} from './weather';
import {view as CitySelector} from './city_selector';

const view = class WeatherRedux extends Component {
	render() {
		return(
			<div>
				<Weather></Weather>
				<CitySelector></CitySelector>
			</div>
		)
	}
}

export { view }
