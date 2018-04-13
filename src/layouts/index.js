/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Fri Apr 13 2018
 *  File : index.js
 *******************************************/
import withRouter from 'umi/withRouter';
import { connect } from 'dva';

function mapStateToProps(state) {
	return {
		text: state.global.title,
	};
}

function APP(props) {
	return (
		<div>
			<h4>
				{props.text}
			</h4>
			{ props.children }
		</div>
	)
}

export default withRouter(
	connect(mapStateToProps)(APP),
);