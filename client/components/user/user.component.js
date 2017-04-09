const controller = require('./user.controller.js');
const template = require('./user.html');

const component = {
	contoller: controller,
	template: template
};

angular
	.module('projectThree')
	.component('user', component);
