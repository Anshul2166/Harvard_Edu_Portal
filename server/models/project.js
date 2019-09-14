const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
	title: String,
	description: String,
	createdAt: String,
	updatedAt: String,
	createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
});

const projectSchema = mongoose.Schema({
	title: {
		type: String,
		default: '',
	},
	description: String,
	projectMembers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'users',
		},
	],
	deploymentUrl: String,
	githubUrl: String,
	voyageId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'voyage',
	},
	image_location: {
		type: String,
		default: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg',
	},
	sprints: [
		{
			title: String,
			description: String,
			startDate: String,
			endDate: String,
		},
	],
	comments: [commentSchema],
	keywords: [{ type: String }],
	createdBy: { type: Schema.Types.ObjectId, ref: 'users' },
	tickets: [
		{
			title: String,
			message: String,
			emailInfo: String,
			githubLink: String,
			userId: { type: Schema.Types.ObjectId, ref: 'users' },
		},
	],
});

module.exports = mongoose.model('projects', projectSchema);
