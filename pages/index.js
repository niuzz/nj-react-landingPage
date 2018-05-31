import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const PostLink = ({ show }) => (
	<li>
		<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
			<a>{show.name}</a>
		</Link>
	</li>
)

const Index = (props) => (
	<Layout>
		<h4>Batman TV Show</h4>
		<ul>
			{props.shows.map( ({show}) => (<PostLink key={show.id} show={show}/>))}
		</ul>
		<style jsx global>{`
      h4, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
	</Layout>
)

Index.getInitialProps = async function() {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
	const data = await res.json()
	console.log(`Show data fetched. Count: ${data.length}`)
	return {
		shows: data
	}
}

export default Index