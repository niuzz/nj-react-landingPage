/******************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Tue Mar 20 2018
 *  File : index.js
 *******************************************/
import React from 'react'
import Slider from 'components/Slider'
import KD from 'components/KeyData'
import TrendBar from 'components/TrendBar'
import styles from './index.less'

import Chart from 'components/Charts/PieChart'

const img1 = '/static/1.jpg'
const img2 = '/static/2.png'
const img3 = '/static/3.jpg'

const imgs = [img1, img2, img3]

export default class Index extends React.Component {
	componentDidMount() {
		// do somthing 
	}

	render() {
		const list = ['新闻报道', '新闻报道', '新闻报道', '新闻报道', '新闻报道', '新闻报道']
		return (
			<div>
				<div className={styles.slider}>
					<div>
						<Slider imgs={imgs} className={styles.slider} />
					</div>
				</div>
				<div className={styles.keyDataWrap}>
					<div className={styles.keyData}>
						<KD />
					</div>
				</div>
				<div className="nj-container">
					<TrendBar list={list}/>
					<Chart />
				</div>
			</div>
		)
	}
}
