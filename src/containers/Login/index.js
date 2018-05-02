/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Wed May 02 2018
 *  File : index.js
 *******************************************/
import React, { Component } from 'react';
import { Form, Input, Button, Message } from "element-react";

import './style.css';

import { Login} from '../../api/login';

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
				alert('submit!');
			} else {
				console.log('error submit!!');
				return false;
			}
		});

		let params = {
			username: this.state.form.username,
			password: this.state.form.password
		}
		Login(params).then(
			response => {
				let code = response.data.code;
				if (code === 1000) {
					console.log(response);
				} else if (code === 3002) {
					Message({
						message: '用户名或密码错',
						type: 'error'
					});
				}
			}
		).catch(err => {
			console.log(err);
		})
	}

	onCancle = e => {
		this.setState({
			// form: Object.assign({}, this.state.form, { username: '', password: '' })
			form : {...this.state.form, username: '', password: ''}
		});
	}

	render() {
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

export default LoginClass;