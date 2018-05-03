/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Wed May 02 2018
 *  File : index.js
 *******************************************/
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as authActions, getLoggedUser } from '../../redux/modules/auth';
import { Link } from 'react-router-dom';

import './style.css';

class Header extends Component {
	render() {
		const {user, onLogout, location} = this.props;
		return(
			<header className="header">
				<div className="nav">
					<span>首页</span>
					{user.username && user.username.length > 0 ? (
						<span>
						当前用户: {user.username} <button onClick={onLogout}>注销</button>
						</span>
					):(
						<span>
							<Link to={{ pathname : "/login", state : {from: location} }}>
							登录
							</Link>
						</span>
					)}
				</div>
			</header>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		user: getLoggedUser(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators(authActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
