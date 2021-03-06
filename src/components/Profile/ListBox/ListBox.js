import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Edit from '@material-ui/icons/Edit';

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
	// listItem: {
	// 	listStyle: 'disc',
	// 	listStylePosition: 'inside',
	// },
	listBox: {
		margin: 0,
		paddingBottom: '5px!important',
	},
});

class ListBox extends Component {
	render() {
		const { classes, type, data, title, onClickEdit,edit_option } = this.props;

		function EditButton(props) {
			console.log(props);
			if (props.edit_option === false) {
				return <div />;
			} else {
				return (
					<IconButton className={classes.icon} onClick={props.onClickEdit}>
						<Edit />
					</IconButton>
				);
			}
		}

		const List = () => {
			if (type && type === 'commaSeprated') {
				const values = data.join(',');
				return (
					<Typography variant="p" component="p">
						{values}
					</Typography>
				);
			} else {
				const values = data.map((item, index) => <li className={classes.listItem}>{item}</li>);
				return <ul>{values}</ul>;
			}
    };
    
		return (
			<div className="list-box">
				<Card className={classes.card}>
					<CardHeader
						title={title}
						classes={{
							title: classes.title,
						}}
						action={<EditButton edit_option={edit_option} onClickEdit={onClickEdit} />}
						className={classes.header}
					/>
					<CardContent className={classes.listBox}>
						<Typography gutterBottom paragraph>
							<List />
						</Typography>
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default withStyles(styles)(ListBox);
