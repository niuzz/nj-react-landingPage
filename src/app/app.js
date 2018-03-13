/** ****************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Mon Mar 12 2018
 *  File : app.js
 ****************************************** */
import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line
import App from './App.jsx'

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
