import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';

import ToDoApp from './ToDoApp';
import store from './Store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<ToDoApp />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
