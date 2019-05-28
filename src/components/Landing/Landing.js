import React, { Component } from 'react';
import User from '../User/User';
import LandingHero from './LandingHero/LandingHero';
import LandingHeader from './LandingHeader/LandingHeader';
import LandingWhyUs from './LandingWhyUs/LandingWhyUs';
import LandingAdditionalInfo from './LandingAdditionalInfo/LandingAdditionalInfo';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Landing extends Component {
	render() {
		const { profile } = this.props;
		if (!profile.fetched) {
			return null;
		} else if (profile.authenticated) {
			this.props.history.push('/dashboard');
			return null;
		} else {
			return (
				<div className="Landing">
					<LandingHeader />
					<LandingHero />
					<LandingWhyUs />
					<LandingAdditionalInfo />
					<User />
				</div>
			);
		}
	}
}

const mapStateToProps = state => ({
	profile: state.profile,
});

export default withRouter(connect(mapStateToProps)(Landing));
