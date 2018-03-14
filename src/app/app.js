/** ****************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Sat Mar 03 2018
 *  File : app.js
 ****************************************** */

import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import App from './views/App'


const root = document.getElementById('root')

const render = (Component) => {
  ReactDom.hydrate(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default // eslint-disable-line
    render(NextApp)
  })
}
