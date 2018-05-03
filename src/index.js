/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Sat Apr 28 2018
 *  File : index.js
 *******************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import App from './containers/App';

import 'normalize.css';
import 'element-theme-default';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)