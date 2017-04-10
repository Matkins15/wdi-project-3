UsersNewController.$inject = ['$stateParams', 'UsersService'];

function UsersNewController($stateParams, UsersService) {
	const vm = this;

	vm.addUser = addUser;
	vm.newUser = {};

	function addUser(newUser){
		console.log(newUser);
		UsersService
			.addUser(newUser)
			.then(function() {
				vm.newUser = {};
			});
	}
}


module.exports = UsersNewController;
