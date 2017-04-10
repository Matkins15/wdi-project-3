const controller = require('./note.controller.js');
const template = require('./note.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('projectThree')
	.component('note', component);
