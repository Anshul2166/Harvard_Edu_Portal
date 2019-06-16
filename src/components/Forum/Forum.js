import React, { Component } from 'react';
import ForumActionArea from './ForumActionArea/ForumActionArea';
import ForumContext from './_forumContext';
import CreateCommunityModal from './CreateCommunityModal/CreateCommunityModal';
import { connect } from 'react-redux';
import { fetchCommunities } from '../../store/actions/communities';
import InfinitePost from './InfinitePost/InfinitePost';
import SearchBox from '../Common/SearchBox/searchBox';

class Forum extends Component {
	state = {
		communityModalOpen: false,
		searchTerm: '',
	};

	closeCommunityModal = () => this.setState({ communityModalOpen: false });

	openCommunityModal = () => this.setState({ communityModalOpen: true });

	componentDidMount = () => {
		if (!this.props.communities.fetched) {
			this.props.fetchCommunities();
		}
	};

	onChangeSearch = event => {
		let searchTerm = event.target.value;
		this.setState({ searchTerm });
	};

	render() {
    let options = [];
		if (this.props.communities.fetched) {
			console.log(this.props.communities);
			this.props.communities.list.map(community =>
				options.push({ value: community.name, label: community.name })
			);
		}
		console.log(options);
		const contextValue = {
			communityModalOpen: this.state.communityModalOpen,
			closeCommunityModal: this.closeCommunityModal,
			openCommunityModal: this.openCommunityModal,
		};
		return (
			<ForumContext.Provider value={contextValue}>
				<div className="Forum">
					<CreateCommunityModal />
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								<InfinitePost />
							</div>
							<div className="col-md-4">
								<SearchBox options={options} />
								<ForumActionArea />
							</div>
						</div>
					</div>
				</div>
			</ForumContext.Provider>
		);
	}
}

const mapStateToProps = state => ({
	communities: state.communities,
	posts: state.posts,
});

export default connect(
	mapStateToProps,
	{ fetchCommunities }
)(Forum);
