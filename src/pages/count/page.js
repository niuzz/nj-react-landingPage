import dva, { connect } from 'dva';
import React from 'react';
import styles from './index.less';
import key from 'keymaster';

const app = dva();

app.model({
	namespace: 'count',
	state: {
		record: 0,
		current: 0,
	},
	reducers: {
		add(state) {
			const newCurrent = state.current + 1;
			return {
				...state,
				record: newCurrent > state.record ? newCurrent : state.record,
				current: newCurrent,
			};
		},
		minus(state) {
			return { ...state, current: state.current - 1 };
		},
	},
	effects: {
		*add(action, { call, put }) {
			yield call(delay, 1000);
			yield put({ type: 'count/minus' });
		},
	},
	subscriptions: {
		keyboardWatcher(dispatch) {
			key('⌘+up, ctrl+up', () => { dispatch({ type: 'count/add' }) });
		},
	},
});

const CountApp = ({ count, dispatch }) => {
	return (
		<div >
			<div >Highest Record: {count.record}</div>
			<div >{count.current}</div>
			<div >
				<button onClick={() => { dispatch({ type: 'count/add' }); }}>+</button>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return { count: state.count };
}
connect(mapStateToProps)(CountApp);

export default CountApp


// ---------
// Helpers

function delay(timeout) {
	return new Promise(resolve => {
		setTimeout(resolve, timeout);
	});
}