/** ****************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Sat Mar 03 2018
 *  File : app.js
 ****************************************** */

import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line
import App from './views/App.jsx' // eslint-disable-line

const root = document.getElementById('root')

const render = (Component) => {
  ReactDom.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App.jsx', () => {
    const NextApp = require('./views/App.jsx').default // eslint-disable-line
    render(NextApp)
  })
}
