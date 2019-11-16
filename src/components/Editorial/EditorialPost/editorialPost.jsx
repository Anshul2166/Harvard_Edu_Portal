import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	header: {
		boxShadow:
			'0px 0px 1px 0px rgba(0,0,0,0.5),0px 0px 0px 0px rgba(0,0,0,0.1),0px 2.5px 0px -1px rgba(0,0,0,0.12)',
	},
	title: {
		color: 'purple',
	},
	card: {
		marginTop: '2.5%',
	},
	icon: {
		color: 'purple',
	},
	listBox: {
		margin: 0,
		paddingBottom: '5px!important',
	},
});

class EditorialPost extends Component {
	onClickLink = () => {
		let link = this.props.link;
		window.location.href = link;
	};

	render() {
		const { classes, description, title, keywords } = this.props;

		return (
			<div className="list-box">
				<Card className={classes.card}>
					<CardHeader
						title={title}
						classes={{
							title: classes.title,
						}}
						className={classes.header}
					/>
					<CardContent className={classes.listBox}>
						<Typography gutterBottom paragraph>
							{description}
						</Typography>
						<Typography gutterBottom paragraph>
							<span className="text-bold">Topics explored:</span>
							{' ' + keywords.join(' , ')}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" color="primary" onClick={this.onClickLink}>
							Explore on medium
						</Button>
					</CardActions>
				</Card>
			</div>
		);
	}
}

export default withStyles(styles)(EditorialPost);
