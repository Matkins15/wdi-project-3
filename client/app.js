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
			template: '<jobs-new></jobs-new>'
		})

		// .state('jobsShow', {
		// 	// HEY, /:userId/jobs? MIGHT NOT NEED
		// 	url: '/:userId/jobs',
		// 	template: '<jobs-show></jobs-show>'
		// 	// template: '<job-new></job-new>'
		// })

		// .state('jobsShow', {
		// 	url: '/:userId/show',
		// 	template: '<job-show></job-show>'
		// })

		.state('jobIdShow', {
			url: '/:userId/jobs/:jobId',
			template: '<job-id-show></job-id-show>'
		})

		.state('jobsEdit', {
			url: '/:userId/jobs/:jobId',
			template: '<job-edit></job-edit>'
		});


// This is saying that if the urlRouterProvider is not working, use '/'.
	$urlRouterProvider.otherwise('/');
}
