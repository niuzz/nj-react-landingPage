import React, { Component } from 'react'
import Routers from '../config/router'

export default class App extends Component {
  componentDidMount() {

  }
  render() {
    return [
      <div>server ssr</div>,
      <Routers />,
    ]
  }
}
