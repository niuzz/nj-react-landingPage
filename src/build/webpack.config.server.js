/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Sun Mar 04 2018
 *  File : webpack.config.server.js
 *******************************************/
const path = require('path')

module.exports = {
	target: 'node',
	entry: {
		app: path.join(__dirname, '../app/server.entry.js')
	},
	output: {
		filename: 'server-entry.js', // 没有浏览器缓存
		path: path.join(__dirname, '../../dist'),
		publicPath: '', // 静态资源路径，区分api，等
		libraryTarget: 'commonjs2' // 打包规范
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: [
					path.join(__dirname, '../node_modules')
				]
			},
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }
		]
	}
}