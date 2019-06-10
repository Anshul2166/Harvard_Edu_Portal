import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
		width: '500px!important',
	};
}

const styles = theme => ({
	modal: {
		minHeight: 500,
		maxHeight: 700,
		overflow: 'scroll',
		minWidth: 500,
	},
	paper: {
		position: 'absolute',
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		outline: 'none',
		paddingTop: 0,
	},
	title: {
		margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
	},
	listItem: {
		padding: 0,
	},
	button: {
		textAlign: 'center',
		marginTop: 30,
	},
});

class EditModal extends React.Component {
	onClickEdit = event => {
		this.props.onConfirmEdit();
	};
	checkIfValidInput = text => {
		text = text.trim();
		if (text) {
			return true;
		}
		return false;
	};
	isButtonDisabled = () => {
		const { title, description } = this.props;
		if (this.checkIfValidInput(title) && this.checkIfValidInput(description)) {
			return false;
		}
		return true;
	};

	render() {
		const { classes, isModalOpen, closeModal, changeTitle, changeDescription, title, description } = this.props;

		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={isModalOpen}
				onClose={closeModal}
				className={classes.modal}
			>
				<div style={getModalStyle()} className={classes.paper}>
					<Typography variant="h6" className={classes.title}>
						Edit Post
					</Typography>
					<div className={classes.demo}>
						<div className="edit-title">
							<label>Title</label>
							<input type="text" value={title} onChange={changeTitle} />
						</div>
						<div className="edit-description">
							<label>Description</label>
							<input type="text" value={description} onChange={changeDescription} />
						</div>
					</div>

					<div className={classes.button}>
						<Button
							variant="contained"
							color="primary"
							onClick={this.onClickEdit}
							disabled={this.isButtonDisabled()}
						>
							Update post
						</Button>
					</div>
				</div>
			</Modal>
		);
	}
}

EditModal.propTypes = {
	classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const EditPostModal = withStyles(styles)(EditModal);

export default EditPostModal;
