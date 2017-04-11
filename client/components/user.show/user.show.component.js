const controller = require('./user.show.controller.js');
const template = require('./user.show.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('projectThree')
	.component('userShow', component);
