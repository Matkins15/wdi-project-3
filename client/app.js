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
		});



// This is saying that if the urlRouterProvider is not working, use '/'.
	$urlRouterProvider.otherwise('/');
}
