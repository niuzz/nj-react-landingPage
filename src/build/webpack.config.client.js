/** ****************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Mon Mar 12 2018
 *  File : webpack.config.client.js
 ****************************************** */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const base = require('./webpack.config.base')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(base, {
  entry: {
    app: path.join(__dirname, '../app/app.js'),
  },
  output: {
    filename: '[name].[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../app/template.html'),
    }),
  ],
})

if (isDev) {
  config.entry = [
    'react-hot-loader/patch',
    path.join(__dirname, '../app/app.js'),
  ]
  config.devServer = {
    host: '0.0.0.0',
    port: '9000',
    contentBase: path.join(__dirname, '../../dist'),
    hot: true,
    overlay: {
      errors: true,
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html',
    },
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}


module.exports = config
