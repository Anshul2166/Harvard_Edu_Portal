import React, { Component } from 'react';
import MemberCard from '../Common/MemberCard/memberCard';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import AdditionalInfo from './AdditionalInfo/additionalInfo';
import Heading from '../Common/Heading/heading';
import Comments from './Comments/comments';
import './projectPage.scss';
import Loading from '../Common/Loading/loading';
// import { ERROR_MESSAGE_VOYAGE_FETCHING } from '../../constants/constant';

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
	state = {
		isAddSprintModal: false,
		isEditSprintModal: false,
		isAddTicketModalOpen: false,
	};
	componentWillMount() {
		// let id = this.props.match.params.id;
		// this.props.projectActions.getSingleProject(id);
	}

	addTicket = async ticket => {
		console.log(ticket);
		this.setState({ submitted: true });
		await this.props.ticketActions.addTicket(ticket);
		setTimeout(() => {
			this.setState({ submitted: false });
			this.closeAddTicketModal();
		}, 2000);
	};

	render() {
		const { projectFetched, projectErrorInFetching } = this.props;
		if (!projectFetched) {
			return <Loading />;
		} else if (projectErrorInFetching) {
			return <div className="text-center">Error</div>;
		}
		const { members, project } = this.props;
		console.log(project);
		return (
			<div className="project-page">
				<Heading title="Project contributors" />
				<TeamMembers members={members} />
				<Heading title="Review info about the project" />
				<AdditionalInfo project={project} />>
				<Heading title="Comments on your projects" />
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

export default connect(mapStateToProps)(ProjectPage);
