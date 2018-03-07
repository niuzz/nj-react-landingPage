/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Sun Mar 04 2018
 *  File : server.js
 *******************************************/
const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const serverEntry = require('../dist/server-entry').default

const template = fs.readFileSync(path.join(__dirname, '../dist/index'), 'utf8')

const app = new express()

app.get('*', function(req, res) {
	const appStr = ReactSSR.renderToString(serverEntry)
	res.send(appStr)
})

app.listen(3000, function() {
	console.log('server is listening on 3000')
})