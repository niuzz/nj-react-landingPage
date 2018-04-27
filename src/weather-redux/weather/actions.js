/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Fri Apr 27 2018
 *  File : actions.js
 *******************************************/
import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

let nextSeqId = 0;

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

		const seqId = ++nextSeqId;

		// 如果来的请求跟老的请求相同就dispatch，如果有新的请求就什么也不做。间接实现了异步中断

		const dispatchIfValid = action => {
			if (seqId === nextSeqId) {
				return dispatch(action);
			} 
		}
		dispatchIfValid(fetchWeatherStarted())

		return fetch(apiUrl).then(response => {
			
			if (response.status !== 200) {
				throw new Error('Fail to get response with status ' + response.status)
			}
			response.json().then(responseJson => {
				dispatchIfValid(fetchWeatherSuccess(responseJson.weatherinfo));
			}).catch(error => {
				dispatchIfValid(fetchWeatherFailure(error));
			});
		}).catch(error => {
			dispatchIfValid(fetchWeatherFailure(error));
		})
	}
}