import React, { Component } from 'react';
import Link from 'next/link';
import { Button } from "antd";
import Layout from '../../components/Layout';

const List = () => (
	<div>
		<Layout>
		<h4>LIST</h4>
		<Link href="/">
			<a>to Home</a>
		</Link>
		<Button>click me</Button>
		</Layout>
	</div>
)

export default List