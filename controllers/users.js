var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var User = require('../models/schema')
var Jobs = require('../models/schema')
var Notes = require('../models/schema');

//GET '/'
router.get('/', function homeAction(request, response){

});

//GET User Dashboard
// router.get('/')

//GET User.Id
router.get('/:id', function userAction(req, res){
	console.log('### User get route ###');
	var id = request.params.id;

	User.findById({_id: id}, function(error, user){
		if(error) response.json({message: 'Could not create user because' + error});

		response.json({user: user});
	}).select('-__v');
});

//GET User.Jobs.byId
router.get('/:userId/jobs/:id', function jobAction(req, res){
	console.log('### JOB BY ID ###');
	User.findById(req.params.userId)
	.exec(function(err, user){
		if(err) { return console.log(err); }

		var targetUser = user;
		var jobsArray = user.jobs;
		var targetJob = jobsArray.id(req.params.id);

		response.json({targetJob: targetJob});
	});

});

//POST User
router.post('/', function createUserAction(req, res){
	console.log('### User Post Route ###');

	var user = new User(request.body);

	user.save(function(error){
		if(error) response.json({ message: 'Could not create user' + error});

		response.json({ user: user });
	});
});


//POST User.Jobs
router.post('/:userId/job', function createJobAction(req, res) {
	console.log('### User.Job post route ###');
	User.findById(req.params.userId)
		.exec(function(err, user) {
			user.jobs.push(new Jobs(req.body));
				console.log("sent to add");
			user.save(function(err){
				if (err) console.log(err);

				response.json({ jobs: jobs });
			});
		});

});

//POST User.Jobs.Notes
router.post('/:userId/job/:id/note', function createNoteAction(req, res) {
	console.log('### User.Job.Note ###');
	User.findById(req.params.userId)
		.exec(function(err, user) {
			Jobs.findById(req.params.id)
				.exec(function(err, jobs) {
					user.jobs.notes.push(new Notes(req.body));
						console.log('### Note added to DB ###');
					user.save(function(err) {
						if (err) console.log(err);

						response.json({ notes: notes });
					});
				});
		});
});

//PATCH User.Jobs


//PATCH User.Jobs.Notes //FOR LATER, STRETCH GOAL


//DELETE User.Jobs


//DELETE User.Jobs.Notes

module.exports = router;
