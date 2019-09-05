import React, { Component } from 'react';
import MemberCard from '../Common/MemberCard/memberCard';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import AdditionalInfo from './AdditionalInfo/additionalInfo';
import Heading from '../Common/Heading/heading';
import Comments from './Comments/comments';
import './projectPage.scss';
import Loading from '../Common/Loading/loading';
import { bindActionCreators } from 'redux';
import * as projectActions from '../../store/actions/projects';
import Typography from '@material-ui/core/Typography';
import ImageContainer from '../Common/ImageContainer/imageContainer';
import { ERROR_MESSAGE_VOYAGE_FETCHING } from '../../constants';
import Button from '@material-ui/core/Button';

const TeamMembers = ({ members }) => {
	const allMembers = members.map((member, index) => (
		<Grid item md={4} key={index}>
			<MemberCard name={member.name} role={member.role} imageUrl={member.imageUrl} info={member.info} />
		</Grid>
	));
	return (
		<Grid container spacing={10}>
			{allMembers}
		</Grid>
	);
};

class ProjectPage extends Component {
	componentWillMount() {
		let id = this.props.match.params.id;
		this.props.projectActions.getSingleProject(id);
	}
	applyForProject=()=>{
		let id = this.props.match.params.id;
		this.props.projectActions.applyForProject(id);
	}

	render() {
		const { projectFetched, projectErrorInFetching } = this.props;
		if (!projectFetched) {
			return <Loading />;
		} else if (projectErrorInFetching) {
			return <div className="text-center">{ERROR_MESSAGE_VOYAGE_FETCHING}</div>;
		}
		const { members, project } = this.props;
		console.log(project);
		return (
			<div className="project-page">
				<ImageContainer img_src={project.image_location} />
				<Button variant="contained" color="primary" onClick={this.applyForProject}>
					Apply
				</Button>
				<Heading title={project.title} />
				<Typography variant="subtitle1" gutterBottom>
					{project.description}
				</Typography>
				<Heading title="Project contributors" />
				<TeamMembers members={members} />
				<Heading title="Review info about the project" />
				<AdditionalInfo project={project} />
				<Heading title="Comments on projects" />
				<Comments />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		project: state.project.project,
		projectFetched: state.project.projectFetched,
		projectErrorInFetching: state.project.projectErrorInFetching,
		members: state.project.members,
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
)(ProjectPage);