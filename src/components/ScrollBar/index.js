/* eslint-disable import/extensions */
/** ****************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Thu Mar 22 2018
 *  File : index.js
 ****************************************** */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.less'

export default class ScrollBar extends React.Component {
  
  static propTypes = {
    content: PropTypes.node.isRequired,
    gap: PropTypes.number,
    speed: PropTypes.number,
  }
  
  static defaultProps = {
    gap: 0,
    speed: 50,
  }
  
  componentDidMount() {
    const {speed, scrollPX} = this.props;
    const wrap = this.refs.wrap;
    const scrollDiv1 = this.refs.content1;
    const scrollDiv2 = this.refs.content2;
    wrap.style.height = scrollDiv1.offsetHeight + 'px';
  
    function Marquee() {
      if (scrollDiv2.offsetHeight === wrap.scrollTop) {
        wrap.scrollTop -= scrollDiv1.offsetHeight;
      }
      wrap.scrollTop ++;
    }
    
    let MyMar = setInterval(Marquee, speed);
    wrap.onmouseover = function StartScroll() {
      clearInterval(MyMar);
    };
    
    wrap.onmouseout = function StopScroll() {
      MyMar = setInterval(Marquee, speed);
    };
  }
  
  render() {
    const {content} = this.props;
    return (
      <div style={{...this.props.style}}>
        <div ref="wrap" className={styles.wrap}>
          <div ref="content1" className={styles.content}>
            {content}
          </div>
          <div ref="content2" className={styles.content}>
            {content}
          </div>
        </div>
      </div>
    );
  }
}
