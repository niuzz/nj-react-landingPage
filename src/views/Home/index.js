import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './index.css';

class Home extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			text: '要有光',
			color: 'primary'
		}
		this.btnClick = this.btnClick.bind(this)
		this.toList = this.toList.bind(this)
	}

	btnClick(e) {
		this.setState({
			text: this.state.text === '要有光' ? 'shine' : '要有光',
			color: this.state.color === 'primary' ? 'secondary' : 'primary'
		}, () => {
			this.props.changeBg(this.state.text)
		})
		
	}

	toList() {
		this.props.history.push('/list')
		// console.log(this.props)
	}

	render() {
		return(
			<div className="App-wrap">
				<p className="App-intro">
					<Button variant="raised" color={this.state.color} onClick={this.btnClick}>
						{this.state.text}
					</Button>
				</p>
				<p>
					<Button variant="raised" color="primary" onClick={this.toList}>
						go to List page
          </Button>
				</p>
			</div>
		)
	}
}

export default Home