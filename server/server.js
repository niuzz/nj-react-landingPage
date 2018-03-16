/******************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Sun Mar 04 2018
 *  File : server.js
 *******************************************/
const express = require('express')
const favicon = require('serve-favicon')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')

const token = require('./util/token.json')

console.log('-----------------------')
console.log(token.accessToken)
console.log('-----------------------')

const isDev = process.env.NODE_ENV === 'development'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(session({
  maxAge: 10 * 60 * 1000,
  name: 'tid',
  resave: false,
  saveUninitialized: false,
  secret: 'nj-top'
}))

app.use('/api/login', require('./util/handel.login'))
app.use('/api', require('./util/proxy'))

app.use(favicon(path.join(__dirname, '../favicon.png')))

if (!isDev) {
  const serverEntry = require('../dist/server-entry').default
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
  app.use('/public', express.static(path.join(__dirname, '../dist')))
  app.get('*', function (req, res) {
    const appString = ReactSSR.renderToString(serverEntry)
    res.send(template.replace('<!-- app -->', appString))
  })
} else { // dev下服务端渲染
  const devStatic = require('./util/dev.static')
  devStatic(app)
}

app.listen(3000, function () {
  console.log('server is listening on 3000')
})
