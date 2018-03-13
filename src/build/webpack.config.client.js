/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Mon Mar 12 2018
 *  File : webpack.config.client.js
 *******************************************/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

isDev = process.env.NODE_ENV === 'development'

module.exports = {
	entry: {
		app: path.join(__dirname, '../app/app.js')
	},
	output: {
		filename: '[name].[hash].js',
		path: path.join(__dirname, '../../dist')
	},
	module: {
		rules: [
			{
				test: /.js$/,
				loader: 'babel-loader'
			},
			{
				test: /.jsx$/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../app/template.html')
		})
	]
}