UserController.$inject = ['$stateParams', 'UsersService'];

function UsersShowController($stateParams, UsersService) {
	const vm = this;

	vm.current = {};

	activate();
	function activate() {}

	function loadCurrentUser() {
		console.log($stateParams);
//make sure when the route loads you make a reference to .userId in the new controller?
		UsersService
			.load($stateParams.userId)
			.then(function resolve(response) {
				vm.current = response.data.user;
			});
	}


}

module.exports = UsersShowController;
