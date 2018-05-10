/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue May 08 2018
 *  File : index.js
 *******************************************/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from '../Home';
import Login from '../Login';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h5 className="App-title">--- GN ---</h5>
				</header>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} exact/>
						<Route exact path="/login" component={Login}/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
