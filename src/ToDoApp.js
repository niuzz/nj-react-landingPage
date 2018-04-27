/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Wed Apr 18 2018
 *  File : ToDoApp.js
 *******************************************/
import React from 'react';
import { view as Todos } from "./todos";
import { view as Filter} from './filter';
import { view as CountDown } from './countDown';
import { view as Weather } from './weather'
import { view as WeatherRedux } from './weather-redux'

function ToDoApp () {
	return (
		<div>
			<Todos />
			<Filter />
			<CountDown />
			<Weather />
			<hr />
			<WeatherRedux />
		</div>
	)
}

export default ToDoApp