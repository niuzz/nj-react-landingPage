/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Mon Mar 12 2018
 *  File : webpack.config.server.js.js
 *******************************************/
const path = require('path')

module.exports = {
	target: 'node',
	entry: {
		app: path.join(__dirname, '../app/server-entry.js')
	},
	output: {
		filename: 'server-entry.js',
		path: path.join(__dirname, '../../dist'),
		libraryTarget: 'commonjs2'
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
	}
}