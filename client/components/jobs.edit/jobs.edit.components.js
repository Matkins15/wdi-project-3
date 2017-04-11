const controller = require('./jobs.edit.controller.js');
const template = require('./jobs.edit.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('projectThree')
	.component('jobsEdit', component);
