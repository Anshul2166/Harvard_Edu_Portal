import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/profile';
import Forum from './components/Forum/Forum';
import User from './components/User/User';
import Graph from './components/Graph/Graph';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Landing from './components/Landing/Landing';
import SunburstGraph from './components/SunburstGraph/SunburstGraph';
import CreatePost from './components/CreatePost/CreatePost';
import SinglePost from './components/SinglePost/SinglePost';
import SelectDomain from './components/SelectDomain/SelectDomain';
import WebDev from './components/LearningPath/WebDev/WebDev';
import GameDev from './components/LearningPath/GameDev/GameDev';
import { connect } from 'react-redux';
import { fetchProfile } from './store/actions/profile';
import { withRouter } from 'react-router-dom';
import NavHeader from './components/Common/NavHeader/NavHeader';
import PractiseQuestions from './components/PractiseQuestions/PractiseQuestions';
import QuestionsAnswer from './components/QuestionsAnswer/QuestionsAnswer';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './shared/privateRoute';
// import Editorial from "./components/Editorial/editorial";
import ProjectPage from './components/ProjectDisplay/projectPage';
import ProjectListView from './components/ProjectListView/projectListView';
import AddProject from './components/AddProject/addProject';
import MyProjects from './components/MyProjects/myProjects';
import AppliedUsers from './components/AppliedUsers/appliedUsers';
import { ToastContainer } from "react-toastify";

class App extends Component {
	componentDidMount = () => {
		this.props.fetchProfile();
	};

	static getDerivedStateFromProps = (nextProps, prevState) => {
		if (!nextProps.profile.fetched) {
			nextProps.fetchProfile();
		}
	};
	render() {
		return (
			<div className="App">
				{/* <Editorial /> */}
				{/* <ProjectPage /> */}
				{/* <PrivateRoute path='/' component={NavHeader} />*/}
				<ToastContainer autoClose={2000} />
				<Switch>
					<Route exact path="/" component={Landing} />
					<PrivateRoute path="/dashboard" component={Dashboard} />
					<PrivateRoute path="/profile" component={Profile} />
					<PrivateRoute path="/forum" component={Forum} />
					<PrivateRoute path="/user" component={User} />
					<PrivateRoute path="/graph" component={Graph} />
					<PrivateRoute path="/sunburst" component={SunburstGraph} />
					<PrivateRoute path="/create-post" component={CreatePost} />
					<PrivateRoute path="/course_info" component={CourseInfo} />
					<PrivateRoute path="/single-post/:id" component={SinglePost} />
					<PrivateRoute path="/select-domain" component={SelectDomain} />
					<PrivateRoute path="/nav_header" component={NavHeader} />
					<PrivateRoute exact path="/select-questions" component={PractiseQuestions} />
					<Route exact path="/signup" component={SignUp} />
					<PrivateRoute exact path="/questions/:topic" component={QuestionsAnswer} />
					<PrivateRoute path="/learning-path/webdev" component={WebDev} />
					<PrivateRoute path="/learning-path/gamedev" component={GameDev} />
          			<PrivateRoute exact path="/projects-view" component={ProjectListView} />
					<PrivateRoute exact path="/projects/:id" component={ProjectPage} />
					<PrivateRoute exact path="/add-project" component={AddProject} />
					<PrivateRoute exact path="/applied-users" component={AppliedUsers} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	profile: state.profile,
});

export default withRouter(
	connect(
		mapStateToProps,
		{ fetchProfile }
	)(App)
);
