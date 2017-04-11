///REFACTOR FOR SINGLE JOB VIEW

JobsShowController.$inject = ['$stateParams', 'UsersService'];

function JobsShowController($stateParams, UsersService) {
	const vm = this;

	vm.currentJob = {};

	vm.userId = stateParams.userId;
	vm.

	activate();
	function activate() {}

	function loadCurrentJob(userId) {
		console.log($stateParams);
//make sure when the route loads you make a reference to .userId in the new controller?
		UsersService
			.loadCurrentJob($stateParams.id)
			.then(function resolve(response) {
				vm.currentJob = response.data.job;
			});
	}

//stateParams.userId statesParams.id need to be sent inside loadCurrentJOb(___)
}

module.exports = JobsShowController;
