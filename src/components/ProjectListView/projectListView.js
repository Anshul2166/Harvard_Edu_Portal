import React, { Component } from 'react';
import UtilityRow from '../Common/UtilityRow/utilityRow';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import DataCard from '../DataCard/dataCard';
import { bindActionCreators } from 'redux';
import * as projectActions from '../../store/actions/projects';
import Loading from '../Common/Loading/loading';
import {
	ERROR_MESSAGE_VOYAGE_FETCHING,
	OPTIONS,
	ORDER,
	DEFAULT_ORDER_VALUE,
	DEFAULT_CATEGORY_VALUE,
} from '../../constants';
import { sortArrayOfObject } from '../../utils/sort';

const styles = theme => ({
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
});

class VoyageView extends Component {
	state = {
		categoryValue: DEFAULT_CATEGORY_VALUE,
		orderValue: DEFAULT_ORDER_VALUE,
		searchTerm: '',
		projects: [],
		allProjects: [],
	};

	async componentWillMount() {
		await this.props.projectActions.getAllProjects();
		let { projects } = this.props;
		this.setState({ projects: projects }, () => {
			this.sortCategory();
		});
	}

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

	sortCategory = () => {
		let { projects, categoryValue, orderValue } = this.state;
		let data = sortArrayOfObject(projects, categoryValue.value, orderValue.value);
		this.setState({ projects: data });
	};

	searchProjects = event => {
		let searchTerm = event.target.value;
		let { allProjects } = this.state;

		let projects = [];
		console.log(searchTerm);
		allProjects.map((project, index) => {
			if (project.title.toLowerCase().includes(searchTerm.toLowerCase())) {
				projects.push(project);
			} else if (project.description.toLowerCase().includes(searchTerm.toLowerCase())) {
				projects.push(project);
			}
		});
		console.log(projects);
		this.setState({ projects: projects, searchTerm });
	};

	applyForProject=(id)=>{
		this.props.projectActions.applyForProject(id);
	}

	openProjectPage=(id)=>{
		this.props.history.push("/projects/"+id);
	}


	render() {
		const { classes } = this.props;
		const { errorFetching, fetched } = this.props;
		const { categoryValue, orderValue, searchTerm, projects } = this.state;

		if (!fetched) {
			return <Loading />;
		} else if (errorFetching) {
			return <div className="text-center">{ERROR_MESSAGE_VOYAGE_FETCHING}</div>;
		}
		let cards = projects.map((project, index) => {
			return (
				<Grid key={project._id} item sm={10} md={4}>
					<DataCard
						title={project.title}
						description={project.description}
						image_location={project.image_location}
						openProject={this.openProject}
						id={project._id}
						applyForProject={this.applyForProject}
						openProjectPage={this.openProjectPage}
					/>
				</Grid>
			);
		});

		return (
			<div className="card-view-wrapper">
				<UtilityRow
					classes={classes}
					options={OPTIONS}
					order={ORDER}
					categoryValue={categoryValue}
					changeCategory={this.changeCategory}
					orderValue={orderValue}
					changeOrder={this.changeOrder}
					searchTerm={searchTerm}
					onChangeSearch={this.searchProjects}
				/>
				<Grid container spacing={10}>
					{cards}
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		projects: state.projectsList.projectList,
		errorFetching: state.projectsList.errorFetching,
		fetched: state.projectsList.fetched,
	};
};

const mapActionsToProps = dispatch => {
	return {
		projectActions: bindActionCreators(projectActions, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(withStyles(styles)(VoyageView));
