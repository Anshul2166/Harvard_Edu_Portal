import React, { Component } from 'react';
import EditorialPost from './EditorialPost/editorialPost';
import { connect } from 'react-redux';
import './editorial.scss';

class Editorial extends Component {
	render() {
		const posts = this.props.editorial.posts;
		return (
			<div className="editorial">
				{posts.map((info, index) => (
					<EditorialPost {...info} />
				))}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		editorial: state.editorial,
	};
};

export default connect(mapStateToProps)(Editorial);
