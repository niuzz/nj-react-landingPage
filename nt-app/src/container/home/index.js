import React, { Component } from 'react';
import { getLoggedUser } from '../../redux/modules/auth';
import { connect } from 'react-redux'

class Home extends Component {
	render() {
		return(
			<div>
				Home
				<p>{this.props.user.username}</p>	
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		user: getLoggedUser(state)
	}
}

export default connect(mapStateToProps)(Home)
