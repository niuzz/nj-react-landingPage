/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Sat Mar 03 2018
 *  File : webpack.config.js
 *******************************************/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const config = {
	entry: {
		app: path.join(__dirname, '../app/app.js')
	},
	output: {
		filename: '[name].[hash].js', // 浏览器缓存
		path: path.join(__dirname, '../../dist'),
		publicPath: '/public' // 静态资源路径，区分api，等
	},
	module: {
		rules: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: [
					path.join(__dirname, '../node_modules')
				]
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

if (isDev) {
	config.devServer = {
		host: '0.0.0.0',
		port: '9000',
		contentBase: path.join(__dirname, '../../dist'),
		// hot: true,
		overlay: {
			errors: true
		},
		publicPath: '/public',
		historyApiFallback: {
			index: '/public/index.html'
		}
	}
}

module.exports = config