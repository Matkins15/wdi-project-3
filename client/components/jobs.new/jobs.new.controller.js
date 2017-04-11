JobsNewController.$inject = ['$stateParams', 'UsersService', '$state'];

function JobsNewController($stateParams, UsersService) {
	const vm = this;

	vm.addJob = addJob;
	vm.newJob = {};
	vm.userId = $stateParams.userId;
	vm.redirectToDash = redirectToDash;


	activate();

	function activate() {}

	console.log('page loaded contoller');

	console.log(vm.newJob);


	function addJob(){

		console.log('we have reached the addJob controller');
		console.log(vm.userId);
		console.log(vm.newJob);
		UsersService
			.addJob(vm.userId, vm.newJob)
			.then(function resolve(response) {
				// const id = response.data.user._id;
				vm.newJob = {};
				vm.redirectToDash();

			});
	}

	function redirectToDash(UsersService, $state) {
		$state.go('jobsShow');
	}

}

module.exports = JobsNewController;
