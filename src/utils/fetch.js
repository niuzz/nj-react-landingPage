/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Wed May 09 2018
 *  File : fetch.js
 *******************************************/
/**
 * Created by niuzz on 17/10/1.
 */
import axios from 'axios'

const service = axios.create({
	baseURL: 'http://json', // baseUrl
	timeout: 15000, // 超时时间
	headers: { 'Content-Type': 'application/json' }
})

// 请求拦截
service
	.interceptors
	.request
	.use(function (requests) {
	let str = JSON.stringify(requests.data)
	requests.data = str
	return requests
}, function (error) {
	// 请求失败的处理
	console.log('error===>' + error)
	return Promise.reject(error)
})

// 响应拦截
service
	.interceptors
	.response
	.use(function (response) {
		let data = JSON.parse(response.data)
		response.data = data
		return response
	}, function (error) {
		console.log('response error =======>' + error)
		// 处理响应失败
		return Promise.reject(error)
	})

service.getData = (url, param) => {
	return (
		service.get(`${url}`, { ...param })
	);
}

service.postData = (url, param) => {
	return (
		service.post(`${url}`, param)
	);
}

export default service
