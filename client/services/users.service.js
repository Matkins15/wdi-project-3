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

	// Load current user
	function loadCurrent(id) {
		return $http.get('/users/' + id);
	}

	function addUser(newUser) {
		console.log('we are in the services');
		return $http.post('/users', newUser);
	}

	function addJob(newJob) {

		//NEED TO FIND OUT ABOUT GETTING USERID FOR POST
		console.log('we are in services');
		return $http.post('/users/' + id + '/jobs')
	}

	function loadCurrentJob(id) {
		return $http.get('/users/' + userId + '/jobs/' + id);
	}
}
