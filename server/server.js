/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue Mar 13 2018
 *  File : server.js
 *******************************************/
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const fs = require('fs')
const ReactSSR = require('react-dom/server')
const chalk = require('chalk')

const app = express()
app.use(favicon(path.join(__dirname, '../favicon.png')))

const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')

const serverEntry = require('../dist/server-entry.js').default

app.get('*', function(req, res) {
	let ssrString = ReactSSR.renderToString(serverEntry)
	console.log('-----------------------')
	console.log(template)
	console.log('-----------------------')
	
	res.send(template.replace('<!-- app -->', ssrString))
	// res.send(template)
})

app.listen('3000', function () {
	console.log(chalk.blue('server is listening on port 3000 %o', 'http://localhost:3000'))
	console.log('\n')
})
