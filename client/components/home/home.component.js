const controller = require('./home.controller.js');
const template = require('./home.html');

const component = {
	contoller: controller,
	template: template
};

angular
	.module('projectThree')
	.component('home', component);
