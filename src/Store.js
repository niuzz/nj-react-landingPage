/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Sat Apr 28 2018
 *  File : Store.js
 *******************************************/
import { createStore, combineReducers, compose } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducer = combineReducers({
	routing: routerReducer
});

const win = window;
const storeEnhancers = compose(
	(win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

const initialState = {};
//const initialState = {};
export default createStore(reducer, initialState, storeEnhancers);