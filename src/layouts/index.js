/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue Mar 20 2018
 *  File : index.js
 *******************************************/
import React from 'react'
import GlobalHeader from 'components/GlobalHeader'
import { Layout } from 'antd'
const { Content } = Layout

export default class AppLayout extends React.Component {
	componentDidMount() {
		// do somthing
	}
	render() {
		return (
			<Layout>
				<GlobalHeader />
				<Content>
					<div>
				 		{
				 			this.props.children
				 		}
				 	</div>
				</Content>
			</Layout>
		)
	}
}