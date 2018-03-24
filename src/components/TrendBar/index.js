import React from 'react'
import ReactDOM from 'react-dom'
import TrendBlock from '../TrendBlock/';
import styles from'./index.less'

export default class TrendBar extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      rect: {}
    }
    this.showBlockAction = this.showBlockAction.bind(this)
    this.toggleShowBlockHandler = this.toggleShowBlockHandler.bind(this)
  }

  toggleShowBlockHandler(objRect){
    this.setState({
      isShow: !this.state.isShow,
      rect: objRect
    })
  }

  showBlockAction(e) {
    let rect = ReactDOM.findDOMNode(e.target).getBoundingClientRect()
    let lastLeft = ReactDOM.findDOMNode(this.refs.block5).getBoundingClientRect().left
    let left = rect.left - 40
    const objRect = {
      lastLeft: lastLeft,
      left: left,
      top: 20
    } 
    
    this.toggleShowBlockHandler(objRect)
  }

  render() {
    return(
      <div className={styles.treadWrap}>
          <ul onMouseLeave={this.showBlockAction} >
            { this.props.list.map((item, index) => {
              return <li 
                onMouseOver={this.showBlockAction} 
                onMouseLeave={this.showBlockAction} 
                key={index} 
                ref={'block' + index}> {item + index} 
                </li>
              })
            }
          </ul>
        <TrendBlock ref="trendBlock" isShow={this.state.isShow} rect={this.state.rect}></TrendBlock>
      </div>
    )
  }
}