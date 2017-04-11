JobsShowController.$inject = ['$stateParams', 'UsersService'];

function JobsShowController($stateParams, UsersService) {
	const vm = this;

	vm.loadCurrentJob = loadCurrentJob;
	vm.currentJob = {};
	vm.userId = $stateParams.userId;
	vm.jobId = $stateParams.jobId;

	activate();
	function activate() {
		loadCurrentJob(vm.userId, vm.jobId);
		console.log($stateParams);
		console.log(vm);
	}

	function loadCurrentJob(userId, jobId) {
		console.log($stateParams);
//make sure when the route loads you make a reference to .userId in the new controller?
		UsersService
			.loadCurrentJob(userId, jobId)
			.then(function resolve(response) {
				console.log("Returned from service dude!");
				console.log(response);
				vm.currentJob = response.data.targetJob;
			});
	}

//stateParams.userId statesParams.id need to be sent inside loadCurrentJOb(___)
}

module.exports = JobsShowController;
