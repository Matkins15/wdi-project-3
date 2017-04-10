angular
	.module('projectThree')
	.service('UsersService', UsersService);

UsersService.$inject = ['$http'];

function UsersService($http) {
	const self = this;

	self.loadCurrent = loadCurrent;
	self.addUser = addUser;

	// Load current user
	function loadCurrent(id) {
		return $http.get('/users/' + id);
	}

	function addUser(newUser) {
		console.log('we are in the services');
		return $http.post('/users', newUser);
	}
}
