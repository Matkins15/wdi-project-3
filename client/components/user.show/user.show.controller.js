UserShowController.$inject = ['$stateParams', 'UsersService'];

function UserShowController($stateParams, UsersService) {
	const vm = this;

	vm.loadCurrentUser = loadCurrentUser;
	vm.current = {};

	activate();
	function activate() {
		loadCurrentUser();
	}

	function loadCurrentUser() {
		console.log($stateParams);
//make sure when the route loads you make a reference to .userId in the new controller?
		UsersService
			.loadCurrent($stateParams.userId)
			.then(function resolve(response) {
				vm.current = response.data.user;
			});
	}
}

module.exports = UserShowController;
