JobsShowController.$inject = ['$stateParams', 'UsersService'];

function JobsShowController($stateParams, UsersService) {
	const vm = this;

	vm.loadAllJobs = {};
	// vm.currentJob = {};

	// vm.userId = stateParams.userId;

	activate();
	function activate() {}

	function loadAllJobs($stateParams) {
		console.log($stateParams);
//make sure when the route loads you make a reference to .userId in the new controller?
		UsersService
			.load($stateParams.userId)
			.then(function resolve(response) {
				vm.current = response.data.user;
			});
	}
}

//stateParams.userId statesParams.id need to be sent inside loadCurrentJOb(___)


module.exports = JobsShowController;
