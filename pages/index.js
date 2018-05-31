import React, { Component } from 'react';
import Link from 'next/link';
import {withRouter} from "next/router";
import Layout from '../components/Layout';

const PostLink = (props) => (
	<li>
		<Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
			<a>
				{props.title}
			</a>
		</Link>
	</li>
)

export default () => (
	<Layout>
		<h4>HOME PAGE</h4>
		<PostLink id= "start-next" title="start Next"/>
		<PostLink id="document-next" title="document Next"/>
		<PostLink id="deploy-next" title="deploy Next"/>
	</Layout>
)