const controller = require('./user.show.controller.js');
const template = require('./user.show.html');

const component = {
	contoller: controller,
	template: template
};

angular
	.module('projectThree')
	.component('user', component);
