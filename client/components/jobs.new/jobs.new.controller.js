JobsNewController.$inject = ['$stateParams', 'UsersService', '$state'];

function JobsNewController($stateParams, UsersService, $state) {
	const vm = this;
	const userId = $stateParams.userId;

	vm.addJob = addJob;
	vm.newJob = {};


	activate();

	function activate() {}


	console.log('page loaded contoller');

	console.log(vm.newJob);


	function addJob(){

		console.log('we have reached the addJob controller');
		console.log(vm.newJob);
		UsersService
			.addJob(userId, vm.newJob)
			.then(function resolve(response) {
				redirectToDash();
			});
	}

	function redirectToDash() {
		$state.go('userShow', { userId: userId });
	}

}

module.exports = JobsNewController;
