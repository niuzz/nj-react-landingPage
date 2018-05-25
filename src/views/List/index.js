import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

const styles = theme => ({
	root: {
		width: '80%',
		marginTop: theme.spacing.unit * 3,
		margin: 'auto',
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
		textAlign: 'center'
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
	pic: {
		width: '100px'
	}
})

class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data : [],
			sum: 0,
			rowsPerPage: 20,
			page: 0
		}
		this.backToHome = this.backToHome.bind(this)
		this.api = this.api.bind(this)
		this.fetchData = this.fetchData.bind(this)
		this.handleChangePage = this.handleChangePage.bind(this)
	}

	backToHome() {
		this.props.history.push('/')
	}

	handleChangePage(event, page) {
		this.setState({
			page: page++
		}, () => {
			this.fetchData(this.state.page)
		})
	}

	api() {
		this.fetchData(0)
	}

	fetchData(page) {
		axios.get('/v2/movie/top250', { params: { start: page * 20, count: 20 } }).then(response => {
			let status = response.status
			let msg = response.statusText
			if (msg === 'OK') {
				this.setState({
					data: response.data.subjects,
					sum: response.data.total
				})
			} else {
				console.log(status)
			}
		})
	}

	render() {
		return (
			<div>
				<h3>List</h3>
				<Button onClick={this.backToHome} variant="raised" color="primary">back to home</Button>
				<br />
				<br />
				<Button onClick={this.api} variant="raised" color="primary">API</Button>
				<Paper className={this.props.classes.root}>
					<h5>{this.state.data.title}</h5>
					<Table className={this.props.classes.table}>
						<TableHead>
							<TableRow>
								<TableCell>title</TableCell>
								<TableCell>orgin title</TableCell>
								<TableCell>img</TableCell>
								<TableCell>rating</TableCell>
								<TableCell>year</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{
								this.state.data.map(item => {
									return(
										<TableRow key={item.id}>
											<TableCell> {item.title}</TableCell>
											<TableCell>{item.original_title}</TableCell>
											<TableCell>
												<img src={item.images.small} alt= {item.title} className={this.props.classes.pic}/>
												{/* {item.images.small} */}
											</TableCell>
											<TableCell>{item.rating.average}</TableCell>
											<TableCell>{item.year}</TableCell>
										</TableRow>
									)
								})
							}
						</TableBody>
					</Table>
					<TablePagination
						component="div"
						count={this.state.sum}
						page={this.state.page}
						rowsPerPage={this.state.rowsPerPage}
						backIconButtonProps={{
							'aria-label': 'Previous Page',
						}}
						nextIconButtonProps={{
							'aria-label': 'Next Page',
						}}
						onChangePage={this.handleChangePage}
					/>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(List)