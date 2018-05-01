/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue May 01 2018
 *  File : index.js
 *******************************************/
import React, { Component } from 'react';
import { Input, Button } from 'element-react';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Jason'
		}
		this.handelClick = this.handelClick.bind(this)
		this.handelNameChange = this.handelNameChange.bind(this)
	}

	handelNameChange(value) {
		this.setState({
			name: value
		})
	}
	handelClick() {
		console.log(this.state.name)
	}

	render() {
		return (
			<div className="App">
				<Input
					icon="time"
					placeholder="按名称搜索"
					name="name"
					value={this.state.name} 
					onChange={this.handelNameChange}
					append={
						<Button type="primary" icon="search" onClick={this.handelClick}>
							搜索
						</Button>
					}		
				/>
			</div>
		);
	}
}

export default App;