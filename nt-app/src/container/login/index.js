import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {actions as authActions, getLoggedUser } from '../../redux/modules/auth';

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			uid: '',
			password: '',
			redirectToReferrer: false
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit = e => {
		e.preventDefault()
		let email = this.state.email
		let password = this.state.password
		this.props.login(email, password)
	}

	onChange = (e) => {
		const inputName = e.target.name
		if (inputName === 'email') {
			this.setState({
				email: e.target.value
			})
		} else if (inputName === 'password') {
			this.setState({
				password: e.target.value
			})
		} else {}
	}

	componentWillReceiveProps(nextProps) {
		const isLoggedIn = !this.props.user.uid && nextProps.user.uid
		if (isLoggedIn) {
			this.setState({
				redirectToReferrer: true
			})
		}
	}

	render() {
		const {redirectToReferrer} = this.state
		if (redirectToReferrer) {
			return <Redirect to={'/'}/>
		}
		return(
			<div>
				<form onSubmit={this.onSubmit}> 
					<input name="email" placeholder="请输入用户名" value={this.state.email} onChange={this.onChange} type="text" />
					<br />
					<input name="password" placeholder="请输入密码" value={this.state.password} onChange={this.onChange} type="password"/>
					<br />
					<button type="submit"> submit </button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	console.log(getLoggedUser(state))
	return {
		user: getLoggedUser(state)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		...bindActionCreators(authActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)