JobsNewController.$inject = ['$stateParams', 'UsersService'];

function JobsNewController($stateParams, UsersService) {
	const vm = this;

	vm.addJob = addJob;
	vm.newJob = {};
	console.log('page loaded contoller');
	function addUser(newJob){
		console.log(newJob);
		UsersService
			.addJob(newJob)
			.then(function() {
				vm.newJob = {};
			});
	}
}

module.exports = JobsNewController;
