/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Thu Apr 19 2018
 *  File : Store.js
 *******************************************/
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

const reducer = combineReducers()

const middlewares = []
if (process.env.NODE_ENV !== 'production') {
	console.log('dev')
}

const storeEnhancers = compose();

export default {}