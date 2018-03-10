import { resolve } from 'url';

/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Sat Mar 10 2018
 *  File : dev.static.js
 *******************************************/
const axios = require('axios')

const webpack = require('webpack')
const serverConfig = require('../../src/build/webpack.config.server')

const getTemplate = () => {
	return new Promise((resolve, reject) => {
		axios.get('http://localhost:9000/public/index.html')
		.then(res => {
			resolve(res.data)
		})
		.catch(reject)
	})
}

const serverCompiler = webpack(serverConfig)
serverCompiler.watch({}, (err, stats) => {
	if (err) throw err
	stats = stats.toJson()
	stats.errors.forEach(err => console.error(err))
	stats.warnings.forEach(warn => console.error(warn))

})

module.exports = function (app) {
	app.get('*', function (req, res) {
		
	})
}