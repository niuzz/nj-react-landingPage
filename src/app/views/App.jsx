import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Routers from '../config/router'


export default class App extends Component {
  componentDidMount() {

  }
  render() {
    return [
      <div key="Links">
        <Link to="/"> Home </Link>
        <br />
        <Link to="/detail"> Detail </Link>
      </div>,
      <Routers key="routers" />,
    ]
  }
}
