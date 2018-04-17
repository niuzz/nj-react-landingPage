/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue Apr 17 2018
 *  File : Actions.js
 *******************************************/
import * as ActionTypes from './ActionTypes'

export const increment = (conterCaption) => {
	return {
		type: ActionTypes.INCREMENT,
		counterCaption: conterCaption
	}
}

export const decrement = (counterCaption) => {
	return {
		type: ActionTypes.DECREMENT,
		counterCaption: counterCaption
	}
}