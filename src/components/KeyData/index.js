/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Wed Mar 21 2018
 *  File : index.js
 *******************************************/
import React from 'react'
import styles from './index.less'
import ScrollBar from '../ScrollBar'

export default class KeyData extends React.Component {
 
 
	render() {
	  
	  const list = ['常规报告 | “佛系”公众号不佛系，遭遇平台频繁删文', '新鲜出炉 | 2017年中国微信500强年报','常规报告 | “佛系”公众号不佛系，遭遇平台频繁删文', '新鲜出炉 | 2017年中国微信500强年报','常规报告 | “佛系”公众号不佛系，遭遇平台频繁删文', '新鲜出炉 | 2017年中国微信500强年报']
    
    const style = {
      height: '40px',
      width: '300px',
      padding: '3px',
      margin: '0px',
      fontSize: '12px',
      background: '#f00'
    };
    
    const content = (
      <ul>
        <li>常规报告 | “佛系”公众号不佛系，遭遇平台频繁删文</li>
        <li>常规报告 | “佛系”公众号不佛系，遭遇平台频繁删文</li>
        <li>常规报告 | “佛系”公众号不佛系，遭遇平台频繁删文</li>
        <li>新闻常规报告 | “佛系”公众号不佛系，遭遇平台频繁删文4</li>
        <li>常规报告 | “佛系”公众号不佛系，遭遇平台频繁删文</li>
        <li>常规报告 | “佛系”公众号不佛系，遭遇平台频繁删文</li>
        <li>常规报告 | “佛系”公众号不佛系，遭遇平台频繁删文</li>
        <li>常规报告 | “佛系”公众号不佛系，遭遇平台频繁删文</li>
        <li>常规报告 | “佛系”公众号不佛系，遭遇平台频繁删文</li>
        <li>常规报告 | “佛系”公众号不佛系，遭遇平台频繁删文</li>
        <li>常规报告 | “佛系”公众号不佛系，遭遇平台频繁删文</li>
      </ul>
    );
    
		return(
			<div className={styles.wrap}>
				key data
        <ScrollBar list={list} style={style} scrollPX={10} content={content}/>
			</div>
		)
	}
}