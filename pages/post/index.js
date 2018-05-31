import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const Post = (props) => (
	<Layout>
		<h4>
			{props.show.name}
		</h4>
		<p>
			{props.show.summary.replace(/<[/]?p>/g, '')}
		</p>
		<img src={props.show.image.medium}/>
	</Layout>
)

Post.getInitialProps = async function (context) {
	const {id} = context.query
	const req = await fetch(`https://api.tvmaze.com/shows/${id}`)
	const show = await req.json()

	console.log(`Fetched show: ${show.name}`)

	return {show}

}
 
export default Post