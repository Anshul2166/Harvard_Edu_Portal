import React, { Component } from 'react';
import Heading from '../Common/Heading/heading';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import * as projectActions from '../../store/actions/projects';
import { connect } from 'react-redux';

class AddProject extends Component {
	state = {
		title: '',
		description: '',
		githubUrl: '',
		deploymentUrl: '',
		keywords: '',
	};

	submitProject = () => {
		let { title, description, githubUrl, deploymentUrl, keywords } = this.state;
		try {
			let keywords_array = keywords.split(',');
			this.props.projectActions.submitProject({ title, description, githubUrl, deploymentUrl, keywords_array });
		} catch (err) {
			console.log(err);
		}
	};

	changeTitle = event => {
		this.setState({ title: event.target.value });
	};

	changeDescription = event => {
		this.setState({ description: event.target.value });
	};

	changeDeploymentUrl = event => {
		this.setState({ deploymentUrl: event.target.value });
	};

	changeGithubUrl = event => {
		this.setState({ githubUrl: event.target.value });
	};

	changeKeywords = event => {
		this.setState({ keywords: event.target.value });
	};

	render() {
		let { title, description, githubUrl, deploymentUrl, keywords } = this.state;
		return (
			<div className="add-project-wrapper wrapper-card text-center">
				<Heading title="Submit project" />
				<div class="form-group row">
					<label forHTML="inputEmail3" className="col-sm-2 col-form-label">
						Title
					</label>
					<div class="col-sm-10">
						<input
							type="text"
							className="form-control"
							placeholder="Title"
							value={title}
							onChange={this.changeTitle}
						/>
					</div>
				</div>
				<div class="form-group row">
					<label forHTML="inputEmail3" className="col-sm-2 col-form-label">
						Description
					</label>
					<div class="col-sm-10">
						<textarea
							type="text"
							className="form-control"
							placeholder="Description(min 300 characters req)"
							value={description}
							onChange={this.changeDescription}
						/>
					</div>
				</div>
				<div class="form-group row">
					<label forHTML="inputEmail3" className="col-sm-2 col-form-label">
						Github URL
					</label>
					<div class="col-sm-10">
						<input
							type="text"
							className="form-control"
							placeholder="URL"
							value={githubUrl}
							onChange={this.changeGithubUrl}
						/>
					</div>
				</div>
				<div class="form-group row">
					<label forHTML="inputEmail3" className="col-sm-2 col-form-label">
						Deployment URL
					</label>
					<div class="col-sm-10">
						<input
							type="text"
							className="form-control"
							placeholder="URL"
							value={deploymentUrl}
							onChange={this.changeDeploymentUrl}
						/>
					</div>
				</div>
				<div class="form-group row">
					<label forHTML="inputEmail3" className="col-sm-2 col-form-label">
						Keywords
					</label>
					<div class="col-sm-10">
						<input
							type="text"
							className="form-control"
							placeholder="Keywords(separated with comma)"
							value={keywords}
							onChange={this.changeKeywords}
						/>
					</div>
				</div>
				<div className="row">
					<Button variant="contained" color="primary" onClick={this.submitProject} className="center-div">
						Submit project
					</Button>
				</div>
			</div>
		);
	}
}

const mapActionsToProps = dispatch => {
	return {
		projectActions: bindActionCreators(projectActions, dispatch),
	};
};

export default connect(
	null,
	mapActionsToProps
)(AddProject);
