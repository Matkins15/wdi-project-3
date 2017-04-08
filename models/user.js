const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	jobs: [JobsSchema]
});

module.exports = mongooses.model('User', UserSchema)
