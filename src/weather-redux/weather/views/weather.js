/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Fri Apr 27 2018
 *  File : weather.js
 *******************************************/
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Status from '../status';

const Weather = ({status, cityName, weather, lowestTemp, highestTemp}) => {
	switch (status) {
		case Status.LOADING:
			return <div>天气请求中……</div>
		case Status.SUCCESS:
			return(
				<div>
					{cityName} {weather} lowestTemp: {lowestTemp} highestTemp: {highestTemp}
				</div>
			)
		case Status.FAILURE:
			return <div>天气信息装载失败</div>
		default:
			throw new Error('unexpected status ' + status);
	}
}

Weather.propTypes = {
	status: PropTypes.string.isRequired,
	cityName: PropTypes.string,
	weather: PropTypes.string,
	lowestTemp: PropTypes.string,
	highestTemp: PropTypes.string
}

const mapStateToProps = (state) => {
	const weatherData = state.weather;
	return {
		status: weatherData.status,
		cityName: weatherData.city,
		weather: weatherData.weather,
		lowestTemp: weatherData.temp1,
		highestTemp: weatherData.temp2
	}
}

export default connect(mapStateToProps)(Weather);