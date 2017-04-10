var express = require('express');
var router = express.Router({mergeParams: true});
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var User = require('../models/user.js');
var Jobs = require('../models/job.js');
// var Notes = require('../models/schema');

//GET '/'
// router.get('/', function homeAction(request, response){

// });

//GET Users
router.get('/', function allUsers(request, response) {
	User.find(function(error, users) {
		if(error) response.json({message: 'Could not find any users'});

		response.json({users: users});
	}).select('-__v');
});

//GET User.Id
router.get('/:id', function userAction(request, response){
	console.log('### User get route ###');
	var id = request.params.id;

	User.findById({_id: id}, function(error, user){
		if(error) response.json({message: 'Could not create user because' + error});

		response.json({user: user});
	}).select('-__v');
});

//GET User.Jobs.byId
router.get('/:userId/jobs/:id', function jobAction(request, response){
	console.log('### JOB BY ID ###');
		var userId = request.params.userId;

	User.findById(request.params.userId)
	.exec(function(err, user){
		console.log('Found user by id');
		if(err) { return console.log(err); }

		var targetUser = user;
		var jobsArray = user.jobs;
		var targetJob = jobsArray.id(request.params.id);
		console.log('Got job by ID' + targetJob);
		response.json({ targetJob: targetJob });
	});

});

//POST User
router.post('/', function createUserAction(request, response){
	console.log('### User Post Route ###');

	var user = new User(request.body);


	// ({
	// 	email: request.body.email,
	// 	password: request.body.password
	// });

	user.save(function(error){
		if(error) response.json({ message: 'Could not create user' + error});

		response.json({ user: user });
	});
});


//POST User.Jobs
router.post('/:userId/jobs', function createJobAction(request, response) {
	console.log('### User.Job post route ###');
	User.findById(request.params.userId)
		.exec(function(err, user) {
			console.log(user);
			user.jobs.push(new Jobs(request.body));
				console.log("sent to add");
			user.save(function(err){
				if (err) response.json({ message: 'Could not create job' + error});

				response.json({ user: user });
			});
		});

});

//POST User.Jobs.Notes
router.post('/:userId/jobs/:id/note', function createNoteAction(req, res) {
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
router.delete('/:userId/jobs/:id', function destroyJobAction(request, response) {
	console.log('### DELETE JOB BY ID ###');
		var userId = request.params.userId;

		User.jobs.remove({_id: id}, function(error) {
			if(error) response.json({message: 'Could not delete JOb because' + error});

			response.json({message: 'Job successfully deleted'});

		}).select('-__v');


	// User.findById(request.params.userId)
	// .exec(function(err, user){
	// 	console.log('Found user by id');
	// 	if(err) { return console.log(err); }

	// 	var targetUser = user;
	// 	var jobsArray = user.jobs;
	// 	var targetJob = jobsArray.id(request.params.id);
	// 	console.log('Got job by ID' + targetJob);
	// 	response.json({ targetJob: targetJob });
	// });

});

//DELETE User.Jobs.Notes

module.exports = router;
