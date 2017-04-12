LoginController.$inject = ['$state'];

function LoginController () {
	const vm = this;

	vm.checkLogin = checkLogin;

	activate();
	function activate() {}

	function checkLogin() {


	}
};

module.exports = LoginController;

