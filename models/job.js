const mongoose =  require('mongoose');

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

JobsSchema.pre('save', function(next) {
	now = new Date();
	this.updated_at = now;
	if ( !this.created_at ) {
		this.created_at = now;
	}
	next();
});

module.exports = mongoose.model('Jobs', JobsSchema)