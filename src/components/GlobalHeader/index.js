/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue Mar 20 2018
 *  File : index.js
 *******************************************/
import React from 'react'
import styles from './index.less'
import { Menu, Dropdown, Icon } from 'antd'

export default class GlobalHeader extends React.Component {
	componentDidMount() {
		// do somthing
	}

	state = {
		current: 'rank',
	}

	handleClick = (e) => {
		console.log('click ', e);
		this.setState({
			current: e.key,
		});
	}

	render() {
		const menu = (
			<Menu>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">新浪微博</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">微信</a>
				</Menu.Item>
				<Menu.Item>
					<a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">大鱼</a>
				</Menu.Item>
			</Menu>
		)
		return(
			<div className={styles.container}>
				<Dropdown overlay={menu}>
					<div className={styles.navText}>
						<Icon type="pie-chart" className={styles.orange}/>榜单<Icon type="down" />
					</div>
				</Dropdown>
			</div>	 
		)
	}

 }
