/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Wed May 02 2018
 *  File : index.js
 *******************************************/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Header extends Component {
	render() {
		const {username, onLogout, location} = this.props;
		return(
			<header className="header">
				<div className="nav">
					<span>首页</span>
					{username && username.length > 0 ? (
						<span>
						当前用户: {username} <button onClick={onLogout}>注销</button>
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

export default Header;
