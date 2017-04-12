angular
	.module('projectThree')
	.service('UsersService', UsersService);

UsersService.$inject = ['$http'];

function UsersService($http) {
	const self = this;

	self.loadCurrent = loadCurrent;
	self.addUser = addUser;
	self.addJob = addJob;
	self.loadCurrentJob = loadCurrentJob;
	self.loadAll = loadAll;
	self.deleteJob = deleteJob;

	// Load current user
	function loadCurrent(id) {
		return $http.get('/users/' + id);
	}

	function loadAll(email) {
		return $http.get('/users');
	}

	function addUser(newUser) {
		console.log('we are in the services');
		return $http.post('/users', newUser);
	}

	function addJob(userId, newJob) {

		console.log('we are in services');
		return $http.post('/users/' + userId + '/jobs', newJob);
	}

	// Load current Job
	function loadCurrentJob(userId, jobId) {
		return $http.get('/users/' + userId + '/jobs/' + jobId);
	}

	function deleteJob(userId, jobId) {
		return $http.delete('/users/' + userId + '/jobs/' + jobId);
	}
}