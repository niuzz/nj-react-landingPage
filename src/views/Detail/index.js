import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions as detailActions, getRow} from '../../redux/modules/detail';

import {Button} from '@material-ui/core';

class Detail extends Component {

	constructor() {
		super()
		this.state = {
			id: '',
			title: '',
			casts: [],
			alt: ''
		}
	}
	componentWillMount() {
	
		this.setState({
			id: this.props.row.id,
			title: this.props.row.title,
			casts: this.props.row.casts,
			alt: this.props.row.alt
		})
		
	}

	gotoList() {
		this.props.history.push('/list')
	}

	render() {
		return(
			<div>
				<h3>detial</h3>
				<Button  variant="raised" color="primary" onClick={this.gotoList.bind(this)}>go to list</Button>
				<p><span>{this.state.id}</span></p>
				<h4>{this.state.title}</h4>
				{
					this.state.casts.map(item => {
						return (
							<div key={item.id}>
								<img src={item.avatars.small} alt={item.name} style={{ width: '100px'}}/>
								<h5 key={item.id}>{item.name}</h5>
								
							</div>
						)
					})
				}
				<a href={this.state.alt} target="_blank">剧情连接</a>	
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		row: getRow(state)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators(detailActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)