import Link from 'next/link';
import Head from 'next/head';
import {Button} from 'antd';

const style = {
	marginRight: 15
}

const Header = () => (
	<div>
		<Head>
			<link rel='stylesheet' href='https://cdn.bootcss.com/antd/3.1.3/antd.css' />
		</Head>
		<Link href="/">
			<Button style={style}>to home</Button>
		</Link>
		<Link href="/list">
			<Button style={style}>to list</Button>
		</Link>
	</div>
)

export default Header