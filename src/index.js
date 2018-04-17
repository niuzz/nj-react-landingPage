import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';

import ControlPanel from './views/ControlPanel';
import store from './Store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<ControlPanel />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
