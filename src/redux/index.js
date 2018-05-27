import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules';
// if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
// 	finalCreateStore = compose(
// 		applyMiddleware(thunk),
// 		window.__REDUX_DEVTOOLS_EXTENSION__()
// 	)(createStore);
// } else {
// 	finalCreateStore = applyMiddleware(thunk)(createStore)
// }

let finalCreateStore;
if (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__) {
	finalCreateStore = compose(
		applyMiddleware(thunk),
		// Required! Enable Redux DevTools with the monitors you chose
		window.__REDUX_DEVTOOLS_EXTENSION__()
	)(createStore);
} else {
	finalCreateStore = compose(applyMiddleware(thunk))(createStore);
}

export default function configureStore(initialState) {
	const store = finalCreateStore(rootReducer, initialState);
	// 支持reducer的热加载
	if (process.env.NODE_ENV !== "production" && module.hot) {
		module.hot.accept("./modules", () =>
			store.replaceReducer(require("./modules"))
		);
	}

	return store;
}

// export default function configureStore(initialState) {
// 	const store = finalCreateStore(rootReducer, initialState);

// 	if (process.env.NODE_ENV !== 'production' && module.hot) {
// 		module.hot.accept('./modules', () => {
// 			store.replaceReducer(require('./modules'));
// 		})
// 		return store;
// 	} else {
// 		return store;
// 	}
// }


// import { createStore, combineReducers, compose } from 'redux';
// import { routerReducer } from 'react-router-redux';
// import rootReducer from './modules';

// const reducer = combineReducers({
// 	routing: routerReducer,
// 	rootReducer
// });

// const win = window;
// const storeEnhancers = compose(
// 	(win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
// );

// const initialState = {};
// //const initialState = {};
// export default createStore(reducer, initialState, storeEnhancers);