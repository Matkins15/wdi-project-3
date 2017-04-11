const angular = require('angular')
require('angular-ui-router');

angular.module('projectThree', ['ui.router'])
	   .config(uiRouterSetup)

// Added ui-router dependency - JS

// uiRouter setup with $state param dependencies - JS
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/home',
			template: '<home></home>'
		})

		.state('about', {
			url: '/about',
			template: '<about></about>'
		})

		.state('signup', {
			url: '/signup',
			template: '<signup></signup>'
		})

		.state('login', {
			url: '/login',
			template: '<login></login>'
		})

		.state('newUser', {
			url: '/newUser',
			template: '<new-user></new-user>'
		})

		.state('userShow', {
			url: '/:userId',
			template: '<user-show></user-show>'
		})

		.state('jobsNew', {
			url: '/:userId/jobs',
<<<<<<< HEAD
			template: '<jobs-new></jobs-new>'
		})
		
		.state('jobsShow', {
			// HEY, /:userId/jobs?
			url: '/:userId/jobs',
			template: '<jobs-show></jobs-show>'
=======
			template: '<job-new></job-new>'
		})

		.state('jobsShow', {
			url: '/:userId/show',
			template: '<job-show></job-show>'
		})

		.state('jobsEdit', {
			url: '/:userId/jobs/:jobId',
			template: '<job-edit></job-edit>'
>>>>>>> job_components
		});



// This is saying that if the urlRouterProvider is not working, use '/'.
	$urlRouterProvider.otherwise('/');
}
