/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Fri Apr 27 2018
 *  File : actions.js
 *******************************************/
import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

export const fetchWeatherStarted = () => ({
	type:FETCH_STARTED
});

export const fetchWeatherSuccess = (result) => ({
	type:FETCH_SUCCESS,
	result
});

export const fetchWeatherFailure = (err) => ({
	type:FETCH_FAILURE,
	err
});

export const fetchWeather = (cityCode) => {
	return dispatch => {
		const apiUrl = `/data/cityinfo/${cityCode}.html`;

		dispatch(fetchWeatherStarted())

		return fetch(apiUrl).then(response => {
			
			if (response.status !== 200) {
				throw new Error('Fail to get response with status ' + response.status)
			}
			response.json().then(responseJson => {
				dispatch(fetchWeatherSuccess(responseJson.weatherinfo));
			}).catch(error => {
				dispatch(fetchWeatherFailure(error));
			});
		}).catch(error => {
			dispatch(fetchWeatherFailure(error));
		})
	}
}