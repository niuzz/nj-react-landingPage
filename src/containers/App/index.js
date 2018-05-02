/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue May 01 2018
 *  File : index.js
 *******************************************/
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

import Home from '../Home';
import Login from '../Login';
import NotFound from '../../components/NotFound'

class App extends Component {
	render() {
		return(
			<div>
				<Router>
					<Switch>
						<Route exact path="/" component={ Home } />
						<Route path="/login" component={ Login } />
						<Route path="*" component={NotFound} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;