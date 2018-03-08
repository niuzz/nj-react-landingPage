/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Sat Mar 03 2018
 *  File : app.js
 *******************************************/

import React from 'react'
import ReactDom from 'react-dom'
import App from './App.jsx'

ReactDom.render(
	<App />, document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App.jsx').default
		ReactDom.render(
			<App />, document.body
		)
	})
}