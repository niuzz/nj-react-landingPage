/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Sat Apr 28 2018
 *  File : index.js
 *******************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './Store';

import Routes from './Routes';

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('root')
)