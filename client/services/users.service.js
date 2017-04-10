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
		return $http.get('/user/' + id);
	}

	function addUser(newUser) {
		return $http.post('/user', newUser);
	}
}
