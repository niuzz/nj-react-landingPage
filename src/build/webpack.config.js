/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Sat Mar 03 2018
 *  File : webpack.config.js
 *******************************************/
const path = require('path')

module.exports = {
	entry: {
		app: path.join(__dirname, '../client/app.js')
	},
	output: {
		filename: '[name].[hash].js', // 浏览器缓存
		path: path.join(__dirname, '../../dist'),
		publicPath: 'public' // 静态资源路径，区分api，等
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader'
			}
		]
	}
}