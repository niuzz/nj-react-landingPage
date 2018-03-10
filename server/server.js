/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Sun Mar 04 2018
 *  File : server.js
 *******************************************/
const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'))

const app = new express()

if (!isDev) {
	const serverEntry = require('../dist/server-entry').default
	const template = fs.readFileSync(path.join(__dirname, '../dist/index'), 'utf8')
	app.use('/public', express.static(path.join(__dirname, '../dist')))
	app.get('*', function (req, res) {
		const appStr = ReactSSR.renderToString(serverEntry)
		res.send(template.replace('<app></app>', appString))
	})
} else { // dev下服务端渲染
	const devStatic = require('./util/dev.static')
	devStatic(app)
}

app.listen(3000, function() {
	console.log('server is listening on 3000')
})