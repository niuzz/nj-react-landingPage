/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Thu Apr 26 2018
 *  File : simpleCountDown.js
 *******************************************/
import React from 'react';
import CountDown from './countDown';

export default () => {
	return(
		<CountDown startCount={10}>
			{
				(count) => <div>{count}</div>
			}	
		</CountDown>
	)
}