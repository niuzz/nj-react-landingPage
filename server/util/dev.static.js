/******************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Sat Mar 10 2018
 *  File : dev.static.js
 *******************************************/
const axios = require('axios')
const webpack = require('webpack')
const path = require('path')
const proxy = require('http-proxy-middleware')
const asyncBootstrap = require('react-async-bootstrapper').default
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

const mfs = new MemoryFs()
const serverCompiler = webpack(serverConfig)// webpack提供的的在node里当做模块调用
serverCompiler.outputFileSystem = mfs // 用mfs替换了fs
let serverBundle, createStoreMap
// 监听打包文件变化
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach(err => console.error(err))
  stats.warnings.forEach(warn => console.warn(warn))

  const bundlePath = path.join( // 读取bundle
    serverConfig.output.path,
    serverConfig.output.filename
  )
  const bundle = mfs.readFileSync(bundlePath, 'utf-8') // 打包的文件读出来了，但不是js里面能使用的模块的方式，需要使用下面的hack方法转化

  const m = new Module()
  m._compile(bundle, 'server-entry.js') // 必须指定bundle, 把bundle编译成node可使用的module，实际上是写入ms内存的名字
  serverBundle = m.exports.default
  createStoreMap = m.exports.createStoreMap
})

module.exports = function (app) {
  app.use('/public', proxy({ // 不使用代理中间件，将不能解析静态资源，代理到了dev:client端口上了
    target: 'http://localhost:9000'
  }))
  app.get('*', function (req, res) {
    getTemplate().then(template => {
      const routerContext = {}

      const stores = createStoreMap()
      const app = serverBundle(stores, routerContext, req.url)
      asyncBootstrap(app)
        .then(() => {
        // 处理服务端渲染重定向
          if (routerContext.url) {
            res.status(302).setHeader('Location', routerContext.url)
            res.end()
          }
          console.log('-----------------------')
          console.log(stores)
          console.log('-----------------------')

          const content = ReactDomSercer.renderToString(app)

          res.send(template.replace('<!-- app -->', content))
        })
        .catch(err => {
          console.log('-----------------------')
          console.log(err)
          console.log('-----------------------')
        })
    })
  })
}
