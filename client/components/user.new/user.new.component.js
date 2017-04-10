const controller = require('./user.new.controller.js');
const template = require('./user.new.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('users')
	.component('usersNew', component);
