/******************************************
 *  Author : niuzz niuzz@hotmail.com
 *  Created On : Tue Mar 20 2018
 *  File : index.js
 *******************************************/
import React from 'react'
import Slider from 'components/Slider'
import KD from 'components/KeyData'
import styles from './index.less'

const path = require('path')

const img1 = path.join(__dirname, '../assets/1.jpg')
const img2 = '/src/' + path.join(__dirname, '../assets/2.png')
const img3 = '/src/' + path.join(__dirname, '../assets/3.jpg')

const imgs = [img1, img2, img3]

export default class Index extends React.Component {
	componentDidMount() {
		// do somthing 
	}

	render() {
		return (
			<section>
				<div className={styles.slider}>
					<div>
						<Slider imgs={imgs} className={styles.slider} />
					</div>
				</div>
				<div className={styles.keyData}>
					<KD />
				</div>
				
				<p>aaaa</p>
			</section>
		)
	}
}
