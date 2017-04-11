const controller = require('./job.id.show.controller.js');
const template = require('./job.id.show.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('projectThree')
	.component('jobId', component);
