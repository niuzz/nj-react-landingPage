/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Wed May 02 2018
 *  File : fetch.js
 *******************************************/
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-react'

const service = axios.create({
	baseURL: '/index.php/api/', // baseUrl
	timeout: 15000, // 超时时间
	method: 'post',
	headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
	transformRequest: [function (data) {
		return qs.stringify(data)
	}]
})
// response拦截器
service.interceptors.response.use(
	response => {
		let code = response.data.code
		if (code !== 1000) {
			console.log('code=============>>>>' + code)
		}
		return response
	},
	error => {
		console.log('error===>' + error)
		Message({
			message: '网络错误超时,请刷新或重新登陆',
			type: 'error',
			duration: 15 * 1000
		})
		return Promise.reject(error)
	}
)

export default service
