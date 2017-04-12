JobsShowController.$inject = ['$stateParams', 'UsersService', '$state'];

function JobsShowController($stateParams, UsersService, $state) {
	const vm = this;
	const userId = $stateParams.userId;

	vm.addNote = addNote;
	vm.newNote = {};
	vm.loadCurrentJob = loadCurrentJob;
	vm.currentJob = {};
	vm.userId = $stateParams.userId;
	vm.jobId = $stateParams.jobId;
	vm.deleteJob = deleteJob;

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

	function deleteJob(userId, jobId) {
		console.log(userId + jobId);
		console.log('Reached delete function');

		//HELP IDS NOT BEING SENT TO DELETE
		UsersService
			.deleteJob(userId, jobId)
			.then(function resolve(response) {

				//HELP USERID NOT SENDING TO STATE
				$state.go('userShow', ({ userId: vm.userId }));
			})
	}

	function addNote(userId, jobId, newNote) {
		console.log('we have reached the addNote controller');
		console.log(vm.newNote);
		UsersService
			.addNote(vm.userId, vm.jobId, vm.newNote)
			.then(function resolve(response) {

				//HELP Notes being sent, not being accepted, perhaps an iddue with dot.notation?
				// redirectToDash();
			});
	}

//stateParams.userId statesParams.id need to be sent inside loadCurrentJOb(___)
}

module.exports = JobsShowController;
