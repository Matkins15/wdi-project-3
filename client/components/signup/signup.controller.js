SignUpController.$inject = ['UsersService', '$state'];

function SignUpController(UsersService, $state) {
	const vm = this;
	// console.log('controller has been loaded');
	vm.newUser = {};
	vm.addNewUser = addNewUser;
	activate();
	function activate() {}

	function addNewUser() {
		debugger;		
		UsersService
			.addUser(vm.newUser)
			.then(function resolve(response) {
				const id = response.data.user._id;
				// vm.newUser = {};
				$state.go('login');
			});
	}
	console.log(vm);
}

module.exports = SignUpController;
