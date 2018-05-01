/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Sat Apr 28 2018
 *  File : index.js
 *******************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';

ReactDOM.render(
	<Provider>
		<App />
	</Provider>,
	document.getElementById('root')
)