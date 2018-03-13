/** ****************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Mon Mar 12 2018
 *  File : webpack.config.server.js.js
 ****************************************** */
const path = require('path')
const base = require('./webpack.config.base')
const webpackMerge = require('webpack-merge')

const config = webpackMerge(
  base,
  {
    target: 'node',
    entry: {
      app: path.join(__dirname, '../app/server-entry.js'),
    },
    output: {
      filename: 'server-entry.js',
      libraryTarget: 'commonjs2',
    },
  },
)

module.exports = config
