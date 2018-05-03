/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Thu May 03 2018
 *  File : index.js
 *******************************************/
 import { combineReducers } from 'redux';
 import app from './app';
 import auth from './auth';

 const rootReducer = combineReducers({
	 app,
	 auth
 });

 export default rootReducer;