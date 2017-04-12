JobsEditController.$inject = ['$state', '$stateParams', 'UsersService'];

function JobsEditController($state, $stateParams, UsersService) {
	const vm = this;

	vm.loadCurrentJob = loadCurrentJob;
	vm.currentJob = {};
	vm.userId = $stateParams.userId;
	vm.jobId = $stateParams.jobId;
	vm.updateCurrentJob = updateCurrentJob;
	vm.updatedJob = {};

	activate();

	function activate() {
		loadCurrentJob(vm.userId, vm.jobId)
	}

	function loadCurrentJob(userId, jobId) {
		UsersService
			.loadCurrentJob(userId, jobId)
			.then(function resolve(response) {
				// console.log("Returned from service dude!");
				// console.log(response);
				vm.currentJob = response.data.targetJob;
			});
	}


	function updateCurrentJob () {
		UsersService
			.updateJob(vm.userId, vm.jobId, vm.updatedJob);
			$state.go('userShow', ({ userId: vm.userId }))

	}


}

module.exports = JobsEditController;
