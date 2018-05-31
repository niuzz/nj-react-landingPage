import Layout from '../../components/Layout';

const Post = (props) => (
	<div>
		<h4>
			{props.url.query.title}
		</h4>
		<p>
			this is post content
		</p>
	</div>
)

export default (props) => (
	<Layout>
		<Post url={props.url}/>
	</Layout>
)