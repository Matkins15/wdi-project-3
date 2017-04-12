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
			url: '/',
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

		.state('userShow', {
			url: '/:userId',
			template: '<user-show></user-show>'
		})

		.state('jobsNew', {
			url: '/:userId/jobs',
			template: '<jobs-new></jobs-new>'
		})

		.state('jobId', {
			// url: '/potato',
			url: '/:userId/jobs/:jobId',
			template: '<job-id></job-id>'
		})

		.state('jobsEdit', {
			url: '/:userId/jobs/:jobId/edit',
			template: '<job-edit></job-edit>'
		});


// This is saying that if the urlRouterProvider is not working, use '/'.
	$urlRouterProvider.otherwise('/');
}
