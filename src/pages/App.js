/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Sat Apr 28 2018
 *  File : App.js
 *******************************************/
import React from 'react';

import {view as TopMenu} from '../component/TopMenu';

const App = ({children}) => {
	return (
		<div>
			<TopMenu />
			<div>
				{children}
			</div>
		</div>
	);
};

export default App;