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
        // marginTop: 30,
        margin:20
	},
});

class ConfirmModal extends React.Component {
	render() {
        const { classes, isModalOpen, closeModal, onClose, onConfirm } = this.props;
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
						Confirm Modal
					</Typography>
					<div className={classes.demo}>
						<div className="description">Are you sure you want to delete this modal?</div>
						<Button variant="contained" type="primary" className={classes.button} onClick={onConfirm}>Confirm</Button>
						<Button variant="contained" type="warning" className={classes.button} onClick={onClose}>Cancel</Button>
					</div>
				</div>
			</Modal>
		);
	}
}

ConfirmModal.propTypes = {
	classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const ConfirmWrapModal = withStyles(styles)(ConfirmModal);

export default withStyles(styles)(ConfirmWrapModal);
