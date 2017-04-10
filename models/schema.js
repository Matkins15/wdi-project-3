var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({

  var Schema = mongoose.Schema;

const NotesSchema = mongoose.Schema({
	notes: {
		type: String,
		required: true
		},
	created_at: Date

});

const JobsSchema = mongoose.Schema({
	company: {
		type: String,
		required: true
		},
	job_title: String,
	phone: String,
	email: String,
	website: String,
	applied: Boolean,
	created_at: Date,
	notes: [NotesSchema]
});

const UserSchema = mongoose.Schema({

	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true}
// 	},
// 	jobs: [JobsSchema]
});

// const NotesSchema = mongoose.Schema({
// 	notes: {
// 		type: String,
// 		required: true
// 		},
// 	created_at: Date

// });

// const JobsSchema = mongoose.Schema({
// 	company: {
// 		type: String,
// 		required: true
// 		},
// 	job_title: String,
// 	phone: String,
// 	email: String,
// 	website: String,
// 	applied: Boolean,
// 	created_at: Date,
// 	notes: [NotesSchema]
// });

// const UserSchema = mongoose.Schema({
// 	email: {
// 		type: String,
// 		unique: true,
// 		required: true
// 	},
// 	password: {
// 		type: String,
// 		required: true}
// // 	},
// // 	jobs: [JobsSchema]
// });

// NotesSchema.pre('save', function(next) {
// 	now = new Date();
// 	this.updated_at = now;
// 	if ( !this.created_at ) {
// 		this.created_at = now;
// 	}
// 	next();
// });

// const NotesModel = mongoose.model('Notes', NotesSchema);
// const JobsModel = mongoose.model('Jobs', JobsSchema);
// const UserModel = mongoose.model('User', UserSchema);

// module.exports = {
// 	User: UserModel
// 	// Jobs: JobsModel,
// 	// Notes: NotesModel
// };
module.exports = mongoose.model('User', UserSchema);
