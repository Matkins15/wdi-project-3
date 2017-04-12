var express = require('express');
var router = express.Router({mergeParams: true});
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var User = require('../models/user.js');
var Jobs = require('../models/job.js');
var Notes = require('../models/notes.js');

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
				if (err) response.json({ message: 'Could not create job' + err});
				console.log("after save");
				response.json({ user: user });
			});
		});

});
// router.post('/:userId/jobs', function createJobAction(request, response) {
// 	console.log('### User.Job post route ###');
// 	User.findById(request.params.userId)
// 		.exec(function(err, user) {
// 			console.log(user);
// 			user.jobs.push(new Jobs(request.body));
// 				console.log("sent to add");
// 			user.save(function(err){
// 				if (err) response.json({ message: 'Could not create job' + error});

// 				response.json({ user: user });
// 			});
// 		});

// });


//POST User.Jobs.Notes
router.post('/:userId/jobs/:id/notes', function createNoteAction(request, response) {
	console.log('### User.Job.Note ###');
	var jobId =request.params.id;
	User.findById(request.params.userId)
		.exec(function(err, user) {
			console.log(user);
			var targetUser = user;
			var jobsArray = user.jobs;
			// console.log(jobsArray);
			var targetJob = jobsArray.id(request.params.id);
			// console.log(targetJob);
			Jobs.findById(request.params.id)
				.exec(function(err, jobs) {
					console.log(targetJob);
					user.jobs.push(new Notes(request.body));
						console.log('### Note added to DB ###');
					user.save(function(err) {
						if (err) console.log(err);

						response.json({ user: user });
					});
				});

			console.log(targetJob);
			targetJob.notes.push(new Notes(request.body));
				console.log('### Note added to DB ###');
			user.save(function(err) {
				if (err) console.log(err);

				response.json({ user: user });
			});
		});
});

// PATCH User.Jobs
//
router.patch('/:userId/jobs/:id', function updateAction(request, response) {

	var id = request.params.id;
	var userId = request.params.userId;

	//get target user
	//within target user, get target job
		//find by id job in question
		//set job by req.body
	//save user

	User
		.findById(userId)
		.exec(function getTargetJob(error, user) {
			var thisJob = user.jobs.id(id);
			console.log(thisJob);
			thisJob.company = request.body.company;
			thisJob.job_title = request.body.job_title;
			thisJob.phone = request.body.phone;
			thisJob.email = request.body.email;
			thisJob.website = request.body.website;
			thisJob.applied = request.body.applied;
			thisJob.created_at = request.body.created_at;

			user.save();
			response.json({message:'Job updated', user: user });
		})
		// Jobs.findById(request.params.id)
		// .exec(function(error, result) {

		// 	response.json({message:'Job updated', user: result });
		// });

	
});



//PATCH User.Jobs.Notes //FOR LATER, STRETCH GOAL


//DELETE User.Jobs
router.delete('/:userId/jobs/:id', function destroyJobAction(request, response) {
	console.log('### DELETE JOB BY ID ###');

	var userId = request.params.userId;
	var jobId = request.params.id;
	console.log(userId);
	console.log(jobId);

	User
		.findByIdAndUpdate(userId, {
			$pull: {
				jobs: {_id: jobId}
			}
		})
		.exec(function(error, user) {
			if (error) console.log(error);
			response.json({message: 'Job successfully deleted'});
		});

});

//DELETE User.Jobs.Notes

module.exports = router;
