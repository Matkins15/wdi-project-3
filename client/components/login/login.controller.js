LoginController.$inject = ['$state', 'UsersService'];

function LoginController ($state, UsersService) {
	const vm = this;
	vm.userId = {};

	vm.checkLogin = checkLogin;
	vm.users = {};
	vm.password = {};
	vm.email = {};


	activate();
	function activate() {}

	function checkLogin(request, response) {
//HELP DO WE NEED TO DO AUTH HELPER TO GET THE LOGGED IN USER ID

		// var email = request.body.email;
		// var password = request.body.password;
		// console.log(vm.password);
		// console.log(vm.email);
		// UsersService
		// 	.loadAll({email: vm.email})
		// 	.then(function resolve(response) {
		// 		vm.users = response.data.users;
		// 		console.log(vm.users);
		// 		Users.findOne({ email: vm.email})
		// 		.then(function(foundUser) {
		// 			nm.userId = foundUser._id;
		// 			console.log(vm.userId);
		// 			$state.go('userShow', { userId: vm.userId });
		// 		})
		// 	});


	}
};

module.exports = LoginController;

