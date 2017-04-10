const mongoose = require('mongoose');


const NotesSchema = mongoose.Schema({
	notes: {
		type: String;
		required: true
	},
	created_at: Date

});

NotesSchema.pre('save', function(next) {
	now = new Date();
	this.updated_at = now;
	if ( !this.created_at ) {
		this.created_at = now;
	}
	next();
});

module.exports = mongoose.model('Notes', NotesSchema);
