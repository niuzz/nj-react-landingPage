/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Wed May 02 2018
 *  File : index.js
 *******************************************/
import React, { Component } from 'react';
import { Form, Input, Button } from "element-react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { actions as authActions, getLoggedUser } from '../../redux/modules/auth';

import './style.css';

class LoginClass extends Component {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				username: 'jason',
				password: 'fdsafdsafdsaa',
				redirectToReferrer: false
			},
			rules: {
				username: [
					{ required: true, message: '请输入活动名称', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			}
		}
	}

	componentWillReceiveProps(nextProps) {
		const isLoginedIn = !this.props.user.uid && nextProps.user.uid;
		if (isLoginedIn) {
			this.setState({
				form: {...this.state.form, redirectToReferrer: true}
			})
		}
	}

	onChange = (key, value) => {
		this.setState({
			form: Object.assign({}, this.state.form, { [key]: value })
		})
		this.forceUpdate();
	}

	onSubmit = e => {
		e.preventDefault();

		this.refs.form.validate((valid) => {
			if (valid) {
				const username = this.state.form.username;
				const password = this.state.form.password;
				this.props.login(username, password);
			} else {
				console.log('error submit!!');
				return false;
			}
		});		
	}

	onCancle = e => {
		this.setState({
			// form: Object.assign({}, this.state.form, { username: '', password: '' })
			form : {...this.state.form, username: '', password: ''}
		});
	}

	render() {
		const { redirectToReferrer } = this.state.form;
		if (redirectToReferrer) {
			return <Redirect to={'/'} />
		}
		return(
			<div className="login">
				<Form ref="form" model={this.state.form} labelWidth="80" onSubmit={this.onSubmit.bind(this)}>
					<Form.Item label="用户名: " prop="username">
						<Input value={this.state.form.username} onChange={this.onChange.bind(this, 'username')}></Input>
					</Form.Item>
					<Form.Item label="密码: " prop="password">
						<Input value={this.state.form.password} onChange={this.onChange.bind(this, 'password')} type="password"></Input>
					</Form.Item>
					<Form.Item>
						<Button type="primary" nativeType="submit">立即创建</Button>
						<Button onClick={this.onCancle.bind(this)}>取消</Button>
					</Form.Item>
				</Form>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		user: getLoggedUser(state)
	}
}

const mapDispathcToProps = dispatch => {
	return {
		...bindActionCreators(authActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispathcToProps)(LoginClass);