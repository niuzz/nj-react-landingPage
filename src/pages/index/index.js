/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Thu Apr 12 2018
 *  File : page.js
 *******************************************/
import React from 'react'
import { connect } from 'dva'
import router from 'umi/router'

function mapStateToProps(state) {
	return { 
		global: state.global,
		count: state.count 
	};
}

function CountApp(props) {
	return(
		<div>
			<div>Highest Record: {props.count.record}</div>
			<div>{props.count.current}</div>
			<div>
				<button onClick={() => { props.dispatch({ type: 'count/add' }); }}>+</button>
				<button onClick={() => { props.dispatch({ type: 'count/minus'}); }}>-</button>
			</div>
			<div>
				<button variant="raised" color="primary" onClick={() => {router.push('/list')}}>跳转的list</button>
			</div>
		</div>
	)
}
export default connect(mapStateToProps)(CountApp)