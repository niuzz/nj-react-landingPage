import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickCounter from './clickCounter';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ClickCounter />, document.getElementById('root'));
registerServiceWorker();
