import React from 'react'
import { Carousel } from 'antd'

export default class Slider extends React.Component {
	render() {
		const {imgs} = this.props 
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			// autoplay: true
		}

		return(
			<div>
				<Carousel {...settings}>
					<div style={{ background: 'url('+ imgs[0] +')', backgroundSize: 'cover', height: '377px'}}></div>
					<div style={{ background: 'url('+ imgs[1] +')', backgroundSize: 'cover', height: '377px' }}></div>	
					<div style={{ background: 'url('+ imgs[2] +')', backgroundSize: 'cover', height: '377px' }}></div>				
				</Carousel>
			</div>
		)
	}
}