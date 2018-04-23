/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Mon Apr 23 2018
 *  File : filter.js
 *******************************************/
import React from 'react';
import Link from './link.js';
import { FilterTypes } from '../../constants.js'

import './style.css';

const Filters = () => {
	return (
		<p className="filters">
			<Link filter={FilterTypes.ALL}> {FilterTypes.ALL} </Link>
			<Link filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED} </Link>
			<Link filter={FilterTypes.UNCOMPLETED}> {FilterTypes.UNCOMPLETED} </Link>
		</p>
	);
};

export default Filters;