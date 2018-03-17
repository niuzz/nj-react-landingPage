import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'
import App from './views/App'

// mobx在服务端渲染的时候不会重复数据变幻
useStaticRendering(true)

export default () => (
  <Provider>
    <StaticRouter>
      <App />
    </StaticRouter>
  </Provider>
)
