import React, { Component } from 'react';
import TicketCard from '../Common/TicketCard/ticketCard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ticketActions from '../../store/actions/tickets';
import Loading from '../Common/Loading/loading';
import {
	ERROR_MESSAGE_VOYAGE_FETCHING,
	OPTIONS,
	ORDER,
	DEFAULT_CATEGORY_VALUE,
	DEFAULT_ORDER_VALUE,
} from '../../constants';
import UtilityRow from '../Common/UtilityRow/utilityRow';
import { sortArrayOfObject } from '../../utils/sort';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneIcon from '@material-ui/icons/Done';
import StopIcon from '@material-ui/icons/Stop';
import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';

function getStatus(onHold, accept, reject) {
	if (accept) {
		return 'Accept';
	} else if (onHold) {
		return 'On Hold';
	} else if (reject) {
		return 'Reject';
	} else {
		return 'Active';
	}
}

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
		height: '100vh',
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		overflowX: 'hidden',
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200,
		},
	},
	contentWrapper: {
		marginLeft: 25,
	},
});

class AppliedUsers extends Component {
	state = {
		categoryValue: DEFAULT_CATEGORY_VALUE,
		orderValue: DEFAULT_ORDER_VALUE,
		searchTerm: '',
		tickets: [],
	};

	componentWillMount() {
		if (!this.props.projectFetched) {
			this.props.projectActions.getAllProjects();
		}
	}

	componentWillReceiveProps(newProps) {
		// const { tickets, ticketFeteched, ticketErrorInFetching, ticketActionErrorInFetching } = newProps;
		// let prev_ticketFectched = this.props.ticketFeteched;
		// if (
		// 	prev_ticketFectched !== ticketFeteched &&
		// 	ticketFeteched &&
		// 	!ticketActionErrorInFetching &&
		// 	!ticketErrorInFetching
		// ) {
		// 	this.setState({ tickets });
		// }
	}

	onAccept = async id => {
		await this.props.ticketActions.acceptTicket(id);
		setTimeout(() => {
			window.location.reload();
		}, 2000);
	};

	onHold = async id => {
		await this.props.ticketActions.holdTicket(id);
		setTimeout(() => {
			window.location.reload();
		}, 2000);
	};

	onReject = async id => {
		await this.props.ticketActions.rejectTicket(id);
		setTimeout(() => {
			window.location.reload();
		}, 2000);
	};

	activateTicket = async id => {
		await this.props.ticketActions.reactivateTicket(id);
		setTimeout(() => {
			window.location.reload();
		}, 2000);
	};

	sortCategory = () => {
		let { tickets, categoryValue, orderValue } = this.state;
		let data = sortArrayOfObject(tickets, categoryValue.value, orderValue.value);
		this.setState({ voyages: data });
	};

	searchTickets = event => {
		let searchTerm = event.target.value;
		let { tickets } = this.props;
		let matchingTickets = [];
		tickets.map((ticket, index) => {
			let title = ticket.title.toLowerCase();
			let description = ticket.description.toLowerCase();
			if (title.includes(searchTerm.toLowerCase()) || description.includes(searchTerm.toLowerCase())) {
				matchingTickets.push(ticket);
			}
		});
		this.setState({ tickets: matchingTickets, searchTerm });
	};

	changeCategory = option => {
		this.setState({ categoryValue: option }, () => {
			this.sortCategory();
		});
	};

	changeOrder = option => {
		this.setState({ orderValue: option, order: option }, () => {
			this.sortCategory();
		});
	};

	filterTickets = status => {
		let { tickets } = this.props;
		let filteredTickets = tickets.filter(ticket => {
			let { onHold, accept, reject } = ticket;
			let current_status = getStatus(onHold, accept, reject);
			if (current_status.includes(status)) {
				return true;
			}
			return false;
		});
		console.log(filteredTickets);
		this.setState({ tickets: filteredTickets });
	};

	render() {
		const { classes } = this.props;
		const { projects, errorFetching, projectFetched } = this.props;
		const { categoryValue, orderValue, searchTerm } = this.state;
		const { tickets } = projects;
		// if (!ticketFeteched) {
		// 	return <Loading />;
		// } else if (ticketErrorInFetching || ticketActionErrorInFetching) {
		// 	return <div className="text-center">{ERROR_MESSAGE_VOYAGE_FETCHING}</div>;
		// }
		console.log(tickets);
		const ticket_cards = tickets.map((ticket, index) => {
			let { onHold, accept, reject } = ticket;
			let status = getStatus(onHold, accept, reject);
			return (
				<TicketCard
					key={index}
					title={ticket.title}
					status={status}
					description={ticket.description}
					onHold={ticket.onHold}
					onAccept={this.onAccept}
					onReject={this.onReject}
					putOnHold={this.onHold}
					activateTicket={this.activateTicket}
					id={ticket._id}
				/>
			);
		});
		const listIcons = [<RestoreIcon />, <StopIcon />, <DoneIcon />, <DeleteIcon />];
		const listActions = ['Active', 'On Hold', 'Accept', 'Reject'];
		return (
			<div className={classes.wrapper}>
				<div className={classes.root}>
					<Drawer
						className={classes.drawer}
						variant="permanent"
						classes={{
							paper: classes.drawerPaper,
						}}
						anchor="left"
					>
						<List>
							{['Active', 'On Hold', 'Accepted', 'Rejected'].map((text, index) => (
								<ListItem button key={text} onClick={() => this.filterTickets(listActions[index])}>
									<ListItemIcon>{listIcons[index]}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItem>
							))}
						</List>
					</Drawer>
					<main className={classes.content}>
						<div className={classes.toolbar} />
						<Grid container spacing="10" className={classes.contentWrapper}>
							<Grid item lg={10}>
								<UtilityRow
									classes={classes}
									options={OPTIONS}
									order={ORDER}
									categoryValue={categoryValue}
									changeCategory={this.changeCategory}
									orderValue={orderValue}
									changeOrder={this.changeOrder}
									searchTerm={searchTerm}
									onChangeSearch={this.searchTickets}
								/>
								{ticket_cards}
							</Grid>
						</Grid>
					</main>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		projects: state.projectsList.projectList,
		errorFetching: state.projectsList.errorFetching,
		projectFetched: state.projectsList.fetched,
	};
};

export default connect(
	mapStateToProps
	// mapActionsToProps
)(withStyles(styles)(AppliedUsers));
