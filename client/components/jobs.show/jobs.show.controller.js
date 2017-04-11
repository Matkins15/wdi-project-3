JobsShowController.$inject = ['$stateParams', 'UsersService'];

function JobsShowController($stateParams, UsersService) {
	const vm = this;

	vm.currentJob = {};

	activate();
	function activate() {}

	function loadCurrentJob() {
		console.log($stateParams);
//make sure when the route loads you make a reference to .userId in the new controller?
		UsersService
			.loadCurrentJob($stateParams.id)
			.then(function resolve(response) {
				vm.currentJob = response.data.job;
			});
	}


}

module.exports = JobsShowController;
