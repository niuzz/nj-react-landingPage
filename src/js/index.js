/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Fri Mar 02 2018
 *  File : index.js
 *******************************************/
var React = require('react')
var ReactDOM = require('react-dom')
import ComponentHeader from './components/header'
class Index extends React.Component {
  render() {
    return (
      <div>
      <ComponentHeader />
      <h2>我是页面的内容</h2>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('example'))