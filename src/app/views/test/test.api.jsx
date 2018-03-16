import React from 'react'
import axios from 'axios'

const accessToken = require('../../../../server/util/token.json')

const tk = accessToken.accessToken

/* eslint-disable */
export default class TestApi extends React.Component {
  topics() {
    axios.get('api/topics')
      .then((resp) => {
        console.log(resp)
      }).catch((err) => {
        console.log(err)
      })
  }

  login() {
    axios.post('api/user/login', {
      accessToken: tk
    })
      .then((resp) => {
        console.log(resp)
      }).catch((err) => {
        console.log(err)
      })
  }

  markAll() {
    axios.post('api/message/mark_all?needAccessToken=true')
      .then((resp) => {
        console.log(resp)
      }).catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.topics}>Topics</button>
        <button onClick={this.login}>Login</button>
        <button onClick={this.markAll}>MarkAll</button>
      </div>
    )
  }
}
/* eslint-enable */
