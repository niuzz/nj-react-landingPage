import React from 'react'
import {Carousel} from 'antd'
import styles from './index.less'

export default class Slider extends React.Component {
  
  render() {
    
    const {imgs} = this.props;
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    
    return (
      <div>
        <Carousel {...settings}>
          <div style={{background: 'url(' + imgs[0] + ')'}} className={styles["slider-dev"]}></div>
          <div style={{background: 'url(' + imgs[1] + ')'}} className={styles["slider-dev"]}></div>
          <div style={{background: 'url(' + imgs[2] + ')'}} className={styles["slider-dev"]}></div>
        </Carousel>
      </div>
    )
  }
}