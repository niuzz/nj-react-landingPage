/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Sat Mar 10 2018
 *  File : dev.static.js
 *******************************************/
const axios = require('axios')
const webpack = require('webpack')
const path = require('path')
const proxy = require('http-proxy-middleware')
const MemoryFs = require('memory-fs')
const ReactDomSercer = require('react-dom/server')

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

const Module = module.constructor

const mfs = new MemoryFs
const serverCompiler = webpack(serverConfig)
serverCompiler.outputFileSystem = mfs // 用mfs替换了fs
let serverBundle
serverCompiler.watch({}, (err, stats) => {
	if (err) throw err
	stats = stats.toJson()
	stats.errors.forEach(err => console.error(err))
	stats.warnings.forEach(warn => console.error(warn))

	const bundlePath = path.join(
		serverConfig.output.path,
		serverConfig.output.filename
	)
	const bundle = mfs.readFileSync(bundlePath, 'utf-8')
	const m = new Module()
	m._compile(bundle, 'server-entry.js') // 必须指定bundle, 把bundle编译成node可使用的module
	serverBundle = m.exports.default
})

module.exports = function (app) {
	app.use('/public', proxy({
		target: 'http://localhost:9000'
	}))
	app.get('*', function (req, res) {
		getTemplate().then(template => {
			const content = ReactDomSercer.renderToString(serverBundle)
			res.send(template.replace('<!-- app -->', content))
		})
	})
}