/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Thu Apr 19 2018
 *  File : Store.js
 *******************************************/
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { reducer as todoReducer } from './todos';
import { reducer as filterReducer } from './filter';
import { reducer as weatherReducer } from './weather-redux/weather/';

// import Perf from 'react-addons-perf'

// 优化工具 16无法使用
const win = window;
// win.Perf = Perf

const reducer = combineReducers({
	todos: todoReducer,
	filter: filterReducer,
	weather: weatherReducer,
});

// 纯函数校验
const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
	middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
	applyMiddleware(...middlewares),
	(win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);