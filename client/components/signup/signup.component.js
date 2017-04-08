const controller = require('./signup.controller.js');
const template = require('./signup.html');

const component = {
  controller: controller,
  template: template
};

angular
  .module('projectThree')
  .component('signup', component);
